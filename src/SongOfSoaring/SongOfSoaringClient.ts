import { InjectCore } from 'modloader64_api/CoreInjection';
import { IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { ModLoaderAPIInject } from "modloader64_api/ModLoaderAPIInjector";
import { Init, onCreateResources, onTick, onViUpdate, Postinit } from "modloader64_api/PluginLifecycle";
import { StyleVar, WindowFlags } from 'modloader64_api/Sylvain/ImGui';
import { IZ64Main } from 'Z64Lib/API/Common/IZ64Main';
import * as fs from 'fs';
import * as path from 'path';
import { Texture } from 'modloader64_api/Sylvain/Gfx';
import { ButtonState, Z64Input } from './ButtonState';
import { vec2, vec3 } from 'modloader64_api/Sylvain/vec';
import bitwise from 'bitwise';
import { UInt8 } from 'bitwise/types';
import { EventHandler, EventsClient } from 'modloader64_api/EventHandler';
import { IActor, Z64 } from 'Z64Lib/API/imports';
import { number_ref } from 'modloader64_api/Sylvain/ImGui';
import { AgeOrForm, IOvlPayloadResult } from 'Z64Lib/API/Common/Z64API';
import Vector3 from 'modloader64_api/math/Vector3';
import { zzstatic2 } from 'Z64Lib/API/Utilities/zzstatic2';
import { SCENES, Scenes, thieves_hideout } from './OoTSceneEnum';
import { Sound } from 'modloader64_api/Sound/sfml_audio';
import { SmartBuffer } from 'smart-buffer';
import { ISongOfSoaringClient } from './SongOfSoaring';
import { Scene } from 'Z64Lib/API/OoT/OOTAPI';
import { ProxySide, SidedProxy } from 'modloader64_api/SidedProxy/SidedProxy';
import MapHelper from './MapHelper';


//TO DO LIST!
// - How the fuck do I read songs?
// - Index Warp
// Hidden Owl placement
// Extra warp locations
// Implement Map Reading



const s2rad = Math.PI / 32768.0;
const rad2s = 32768.0 / Math.PI;

interface OwlData {
    id: number;
    scene: Array<number>;
    mapLoc: vec2;
    childStatueSpawn: Buffer;
    childStatueRot: Buffer;
    adultStatueSpawn: Buffer;
    adultStatueRot: Buffer;
    adultSpawnPos: Buffer;
    adultSpawnRot: Buffer;
    childSpawnPos: Buffer;
    childSpawnRot: Buffer;
    isConfigured: Array<boolean>;
}

const EMPTY_OWL_DATA: Buffer = Buffer.alloc(2, 0);
export const SAVE_DATA_POINTER: number = 0x8011B874;

export default class SongOfSoaringClient implements ISongOfSoaringClient {
    @ModLoaderAPIInject()
    ModLoader!: IModLoaderAPI;
    @InjectCore()
    core!: IZ64Main;
    Input!: Z64Input;

    @SidedProxy(ProxySide.CLIENT, MapHelper)
    mapHelper!: MapHelper;

    songPlayed: boolean = false;
    owlData: Buffer = Buffer.alloc(2, 0);
    owl!: Texture;
    map!: Texture;
    cursor!: Texture;
    none!: Texture;
    sBlip!: Sound;
    sMenuOpen!: Sound;
    sMenuSelect!: Sound;
    sMenuClose!: Sound;
    sTextClose!: Sound;
    ඞ: boolean = false;  //🥺👉👈
    boot: boolean = true;
    open: boolean = true;
    onOpen: boolean = true;
    saveLoaded: boolean = false;
    inputstall: boolean = false;
    hiddenOwl: boolean = false;
    aStall: number = 0;
    bStall: number = 0;
    isText: boolean = false;
    yesNo: number = 0;
    hasWarped: number = 0;
    selection!: vec2;
    kakPos = { x: 100, y: 100 };
    mapSize = { x: 0, y: 0 };
    mapScale: number = 1;
    cursorPos!: number;
    mapPos = { x: 0, y: 0 };
    lastWarp!: IWarpLocation;

    id: number_ref = [0];
    owlStatue!: IOvlPayloadResult;
    locations: Array<OwlData> = [];
    model: number = 0;
    currentOwl: IActor | undefined;
    warpingHandler: string | undefined;

    Kakariko: IWarpLocation = {
        mapLoc: { x: 658, y: 248 },
        entranceIndex: [0x00DB, 0x00DB],
        sceneIndex: [Scenes.get(SCENES.kakariko_village)!.id, Scenes.get(SCENES.kakariko_village)!.id]
    };

    GerudoRiver: IWarpLocation = {
        mapLoc: { x: 230, y: 380 },
        entranceIndex: [0x0117, 0x0117],
        sceneIndex: [Scenes.get(SCENES.gerudo_valley)!.id, Scenes.get(SCENES.gerudo_valley)!.id]
    };

    Fishing: IWarpLocation = {
        mapLoc: { x: 460, y: 800 },
        entranceIndex: [0x0102, 0x0102],
        sceneIndex: [Scenes.get(SCENES.lake_hylia)!.id, Scenes.get(SCENES.lake_hylia)!.id]
    };

    GoronCity: IWarpLocation = {
        mapLoc: { x: 650, y: 100 },
        entranceIndex: [0x013D, 0x013D],
        sceneIndex: [Scenes.get(SCENES.death_mountain_trail)!.id, Scenes.get(SCENES.death_mountain_trail)!.id]
    };

    DesertColossus: IWarpLocation = {
        mapLoc: { x: 50, y: 250 },
        entranceIndex: [0x0123, 0x0123],
        sceneIndex: [Scenes.get(SCENES.desert_colossus)!.id, Scenes.get(SCENES.desert_colossus)!.id]
    };

    KokiriForest: IWarpLocation = {
        mapLoc: { x: 800, y: 575 },
        entranceIndex: [0x0211, 0x0211],
        sceneIndex: [Scenes.get(SCENES.kokiri_forest)!.id, Scenes.get(SCENES.kokiri_forest)!.id]
    };

    LonLon: IWarpLocation = {
        mapLoc: { x: 475, y: 425 },
        entranceIndex: [0x0157, 0x0157],
        sceneIndex: [Scenes.get(SCENES.lon_lon_ranch)!.id, Scenes.get(SCENES.lon_lon_ranch)!.id]
    };

    ZoraDomain: IWarpLocation = {
        mapLoc: { x: 930, y: 300 },
        entranceIndex: [0x01A1, 0x01A1],
        sceneIndex: [Scenes.get(SCENES.zora_domain)!.id, Scenes.get(SCENES.zora_domain)!.id]
    };

    CastleField: IWarpLocation = {
        mapLoc: { x: 515, y: 130 },
        entranceIndex: [0x023D, 0x0138], //23D
        sceneIndex: [Scenes.get(SCENES.ganon_castle_exterior)!.id, Scenes.get(SCENES.hyrule_castle)!.id]
    };
    
    warpLocations: IWarpLocation[] = [
        this.Kakariko,          // 0 -
        this.KokiriForest,      // 1 -
        this.ZoraDomain,        // 2 -
        this.DesertColossus,    // 3 -
        this.GerudoRiver,       // 4 -
        this.Fishing,           // 5 -
        this.LonLon,            // 6 -
        this.CastleField,       // 7 -
        this.GoronCity          // 8 -
    ];

    warpTextYes: Texture[] = [];

    warpTextNo: Texture[] = [];

    @EventHandler(Z64.OotEvents.ON_SAVE_LOADED)
    onSaveLoad() {
        this.saveLoaded = true;
        this.owlData = this.ModLoader.emulator.rdramReadBuffer(SAVE_DATA_POINTER, 2);
    }

    @onTick()
    onTick() {
        this.owlData.writeUInt16BE(this.ModLoader.emulator.rdramRead16(SAVE_DATA_POINTER), 0);
        if (!(this.hasWarped <= 0)) {
            if (this.hasWarped == 1) {
                let iTemp = Buffer.alloc(0xC, 0)
                this.ModLoader.emulator.rdramWrite16((0x801C84A0 + 0x1E0 + 0x142), 1); // Camera Setting to Free
                this.ModLoader.emulator.rdramWrite16((0x801C84A0 + 0x1E0 + 0x144), 0);
                this.ModLoader.emulator.rdramWriteBuffer((0x801C84A0 + 0x1E0 + 0xF0), iTemp);
                this.ModLoader.emulator.rdramWriteBuffer((0x801C84A0 + 0x1E0 + 0x80), iTemp);
                this.ModLoader.logger.error(`ENDING HASWARPED`);

            }
            this.hasWarped--;
        }

        if (this.aStall != 0) {
            this.aStall--;
        }

        if (this.bStall != 0) {
            this.bStall--;
        }
    }

    @EventHandler(Z64.OotEvents.ON_SCENE_CHANGE)
    onSceneChange(scene: number) {
        this.currentOwl = undefined;
        for (let i = 0; i < this.locations.length; i++) {
            if (this.locations[i].scene[this.core.OOT!.save.age] === scene) {
                this.spawnOwl(i)
                break;

            }
        }
    }

    @EventHandler(EventsClient.ON_PAYLOAD_INJECTED)
    onPayLoad(evt: any) {
        if (evt.file === "OwlStatue.ovl") {
            this.owlStatue = evt.result;
            let temp = this.ModLoader.emulator.rdramReadBuffer(evt.result.pointer, evt.result.size);
            let zz = new zzstatic2();
            let model = temp.slice(0x5F0);
            zz.repoint(model, evt.result.pointer + 0x5F0);
            this.ModLoader.emulator.rdramWriteBuffer(evt.result.pointer, temp);
            this.model = evt.result.pointer;
        }
    }

    @Init()
    init() {
        this.Input = new Z64Input(this.ModLoader.emulator, 0x801C84B4);
    }

    @Postinit()
    postinit(): void {
        this.locations = JSON.parse(fs.readFileSync(path.resolve(__dirname, "owl.json")).toString());
    }

    transport(warp: IWarpLocation) {
        console.log(warp);
        this.currentOwl = undefined;
        this.ModLoader.emulator.rdramWrite32(0x8011B934, 0x3);
        let sb = new SmartBuffer();
        let loc: OwlData | undefined;
        for (let i = 0; i < this.locations.length; i++) {
            if (this.locations[i].scene[this.core.OOT!.save.age] === warp.sceneIndex[this.core.OOT!.save.age]) {
                loc = this.locations[i];
                break;
            }
        }
        if (loc === undefined) {
            return;
        }
        let pos = this.core.OOT!.save.age === 0 ? loc.adultSpawnPos : loc.childSpawnPos;
        let rot = this.core.OOT!.save.age === 0 ? loc.adultSpawnRot : loc.childSpawnRot;

        let rawpos = this.core.OOT!.save.age === 0 ? loc.adultStatueSpawn : loc.childStatueSpawn;
        let rawrot = this.core.OOT!.save.age === 0 ? loc.adultStatueRot : loc.childStatueRot;
        let linkpos = new Vector3(rawpos.readFloatBE(0), rawpos.readFloatBE(4), rawpos.readFloatBE(8));
        let ry = rawrot.readInt16BE(2) * s2rad;
        linkpos = linkpos.plus(new Vector3(Math.sin(ry), 0, Math.cos(ry)).multiplyN(60))
        ry = Math.floor(ry * rad2s)

        pos.writeFloatBE(linkpos.x, 0)
        pos.writeFloatBE(linkpos.y, 4)
        pos.writeFloatBE(linkpos.z, 8)

        if (Math.sign(ry) >= 0) {
            ry = (ry - 0x8000) % 0x10000
            rot.writeInt16BE(ry, 2)
        }
        else {
            ry = (ry + 0x8000) % 0x10000
            rot.writeInt16BE(ry, 2)
        }

        sb.writeBuffer(pos);
        sb.writeInt16BE(ry); // yaw
        sb.writeUInt16BE(0x02FF); // player variable
        sb.writeUInt16BE(warp.entranceIndex[this.core.OOT!.save.age]); // entrance index
        sb.writeUInt8(0); // room id
        sb.writeUInt8(0xFF); // data?
        sb.writeUInt32BE(0); // flag shit 1
        sb.writeUInt32BE(0); // flag shit 2

        this.ModLoader.emulator.rdramWriteBuffer(0x8011B938 + (0 * 0x1C), sb.toBuffer());
        this.ModLoader.emulator.rdramWriteBuffer(0x8011B938 + (1 * 0x1C), sb.toBuffer());
        this.ModLoader.emulator.rdramWriteBuffer(0x8011B938 + (2 * 0x1C), sb.toBuffer());

        this.core.OOT!.commandBuffer.runWarp(warp.entranceIndex[this.core.OOT!.save.age], 0, undefined, 0x08).then(() => {
            this.warpingHandler = this.ModLoader.utils.setIntervalFrames(() => {
                if (this.core.OOT!.global.scene === (loc!.scene[this.core.OOT!.save.age]) && this.core.OOT!.global.scene_framecount < 20) {
                    this.core.OOT!.link.rotation.setRawRot(rot);
                    this.ModLoader.utils.clearIntervalFrames(this.warpingHandler!);
                    this.warpingHandler = undefined;
                }
            }, 1);
        });

        this.hasWarped = 75;
    }

    getForwardBit(buf: Buffer, start: number = 0): number {
        let bits = this.ModLoader.emulator.rdramReadBitsBuffer(SAVE_DATA_POINTER, 2);
        if (start > 9) start = 0;
        for (let i = start; i < bits.byteLength; i++) {
            if (bits[i] === 1) {
                return i;
            }
        }
        return this.getForwardBit(buf);
    }

    getBackwardBit(buf: Buffer, start: number = 0) {
        let bits = this.ModLoader.emulator.rdramReadBitsBuffer(SAVE_DATA_POINTER, 2);
        if (start === -1) start = 9;
        for (let i = start; i >= 0; i--) {
            if (bits[i] === 1) {
                return i;
            }
        }
        return this.getBackwardBit(buf, bits.byteLength - 1);
    }

    @onCreateResources()
    onResourceLoad() {
        if (this.boot) { //ONLY HAPPENS ON BOOT

            this.init();

            this.owl = this.ModLoader.Gfx.createTexture();
            this.owl.loadFromFile(path.resolve(__dirname, "owl.png"));

            this.map = this.ModLoader.Gfx.createTexture();
            this.map.loadFromFile(path.resolve(__dirname, "map.png"));

            this.cursor = this.ModLoader.Gfx.createTexture();
            this.cursor.loadFromFile(path.resolve(__dirname, "cursor.png"));

            this.sBlip = this.ModLoader.sound.loadSound(path.resolve(__dirname, "OOT_PauseMenu_Cursor.wav"));

            this.sMenuOpen = this.ModLoader.sound.loadSound(path.resolve(__dirname, "OOT_PauseMenu_Open.wav"));

            this.sMenuSelect = this.ModLoader.sound.loadSound(path.resolve(__dirname, "OOT_PauseMenu_Select.wav"));

            this.sMenuClose = this.ModLoader.sound.loadSound(path.resolve(__dirname, "OOT_PauseMenu_Close.wav"));

            this.sTextClose = this.ModLoader.sound.loadSound(path.resolve(__dirname, "OOT_Dialogue_Done.wav"));

            
            this.mapSize = { x: this.map.width * 2, y: this.map.height * 2 };

            this.boot = false;

            const texTemp = (tex: string) => {
                let temp = this.ModLoader.Gfx.createTexture();
                temp.loadFromFile(path.resolve(__dirname, tex));
                return temp;
            }


            this.warpTextYes.push(texTemp("Text/KakOK.png"));

            this.warpTextYes.push(texTemp("Text/KokiriOK.png"));

            this.warpTextYes.push(texTemp("Text/ZoraOK.png"));

            this.warpTextYes.push(texTemp("Text/DesertOK.png"));

            this.warpTextYes.push(texTemp("Text/GerudoOK.png"));

            this.warpTextYes.push(texTemp("Text/LakeHyliaOK.png"));

            this.warpTextYes.push(texTemp("Text/RanchOK.png"));

            this.warpTextYes.push(texTemp("Text/CastleOK.png"));

            this.warpTextYes.push(texTemp("Text/GoronOK.png"));


            this.warpTextNo.push(texTemp("Text/KakNO.png"));

            this.warpTextNo.push(texTemp("Text/KokiriNO.png"));

            this.warpTextNo.push(texTemp("Text/ZoraNO.png"));

            this.warpTextNo.push(texTemp("Text/DesertNO.png"));

            this.warpTextNo.push(texTemp("Text/GerudoNO.png"));

            this.warpTextNo.push(texTemp("Text/LakeHyliaNO.png"));

            this.warpTextNo.push(texTemp("Text/RanchNO.png"));

            this.warpTextNo.push(texTemp("Text/CastleNO.png"));

            this.warpTextNo.push(texTemp("Text/GoronNO.png"));

            this.none = texTemp("Text/None.png")
        }
    }

    @onViUpdate() // Once per vertical interrupt (refresh, buffer swap)
    onViUpdate() {
        if (this.hasWarped != 0 && this.core.OOT!.global.scene_framecount < 200) {
            //this.adjustCamera();
        }

        //@ts-ignore
        this.Input.step(this.core.OOT?.global.framecount);                  // required for Input

        if (this.Input.DUp.state === ButtonState.Down && this.Input.Z.state === ButtonState.Down) { // Detect when song is played.
            this.songPlayed = true;
        }

        if (this.songPlayed) {                                              // Song is played.

            if (this.onOpen) {                                              // Check to see if this is the first loop after being played.
                this.sMenuOpen.play();                                      // Play open menu sound
                if (!this.owlData.equals(EMPTY_OWL_DATA)) {                 // Ensure the owl array is not empty.
                    this.cursorPos = this.getForwardBit(this.owlData, 0);   // set cursor position the next avaliable owl location.
                }
                else {                                                      // Otherwise
                    this.cursorPos = this.mapHelper.cursorPos;              // Set cursor position to the Map Index.
                }
                this.onOpen = false;                                        // This is not longer the firsty run. 
            }

            this.core.OOT!.link.redeadFreeze = 4;                           // Stall Links motion. 
            this.open = true;                                               // Set the window as open.
            this.mapPos = { x: this.ModLoader.ImGui.getWindowPos().x + ((this.ModLoader.ImGui.getMainViewport().size.x / 2) - this.mapSize.x / 2), y: this.ModLoader.ImGui.getWindowPos().y + ((this.ModLoader.ImGui.getMainViewport().size.y / 2) - this.mapSize.y / 2) - 12 }; // Calculates maps potision.
            this.constrainWindow(this.ModLoader.ImGui.getWindowWidth(), this.ModLoader.ImGui.getWindowHeight()); // Calculates the windows height and width based on modloaders size.
            this.ModLoader.ImGui.setNextWindowPos(this.mapPos);             //sets the windows position to the calculated position above. 
            this.ModLoader.ImGui.setNextWindowSize(this.mapSize);           // Sets the maps size to the values calculated above.

            if (!this.owlData.equals(EMPTY_OWL_DATA) || this.hiddenOwl) {   //Has an owl been hit? Hidden or otherwise.
                this.ModLoader.ImGui.pushStyleVar(StyleVar.Alpha, 0.000001);// Makes the IMGui window the map is on invisible.
                if (this.ModLoader.ImGui.begin("Song of Soaring###Maro:SoSWindow", [this.songPlayed], WindowFlags.NoResize | WindowFlags.NoTitleBar)) { // Starts the SoS Window.
                    this.ModLoader.ImGui.popStyleVar();                     // Clears the invisible Style Var
                    this.ModLoader.ImGui.pushStyleVar(StyleVar.Alpha, 1);   // Sets the contents of the window to visible.
                    this.ModLoader.ImGui.getWindowDrawList().addImage(this.map.id, { x: 0, y: 0 }, { x: this.ModLoader.ImGui.getWindowWidth(), y: this.ModLoader.ImGui.getWindowHeight() }); // Draws map to window.


                    for (let i = 0; i < this.warpLocations.length; i++) {                       // For every owl location
                        if (i < bitwise.byte.read(this.owlData[0] as UInt8).length) {           // If you are in the first byte.
                            if (Boolean(bitwise.byte.read(this.owlData[0] as UInt8)[i])) {      // For every bit in the first byte.
                                this.placeOnMap(this.owl, this.warpLocations[i].mapLoc);        // Draw it on the map if its activated.
                            }
                        }
                        if (Boolean(bitwise.byte.read(this.owlData[1] as UInt8)[0])) {          // If you are in the second byte
                            this.placeOnMap(this.owl, this.warpLocations[8].mapLoc);            // Place this owl if activated. 
                        }
                    }

                    if (this.Input.joystickX > 50 && !this.isText && !this.inputstall) {            // MENU INPUTS
                        if (this.owlData.equals(EMPTY_OWL_DATA)) {                                  // If no owls have been hit
                            this.sBlip.play();                                                      // play sound effect   
                            this.indexWarpCrash();                                                  // Crash the game lmao
                            this.closeWindow();                                                     // Close the window for the crash.
                            return;                                                                 // Stop VI Update loop.
                        }
                        else {                                                                      // Otherwise
                            this.sBlip.play();                                                      // Play sound effect
                            this.cursorPos = this.getForwardBit(this.owlData, this.cursorPos + 1);  // Get the next activated owl and change the cursor pos.
                        }
                        this.inputstall = true;                                                     // Don't take further lef/right input until stick neutral  
                    }

                    if (this.Input.joystickX < -50 && !this.isText && !this.inputstall) {           // If joystick left

                        if (this.owlData.equals(EMPTY_OWL_DATA)) {                                  // If no owls have been hit
                            this.sBlip.play();                                                      // play sound effect 
                            this.indexWarpCrash();                                                  // Crash the game lmao
                            this.closeWindow();                                                     // Close the SoS UI.
                            return;                                                                 // Stop VI Update loop.
                        }
                        else {                                                                      // Otherwise
                            this.sBlip.play();                                                      // Play sound effect
                            this.cursorPos = this.getBackwardBit(this.owlData, this.cursorPos - 1); // Get the next activated owl and change the cursor pos.
                        }
                        this.inputstall = true;                                                     // Don't take further lef/right input until stick neutral  
                    }

                    this.placeOnMap(this.cursor, this.warpLocations[this.cursorPos].mapLoc);        // Draw cursor on map.

                    if (this.Input.A.state >= ButtonState.Pressed && !this.isText && this.aStall == 0) {    // If you press A && a text box is not displayed && A is not stalled.
                        this.sMenuSelect.play();                                                            // Play sound effect
                        this.yesNo = 0;                                                                     // Reset Yes/No cursor pos
                        this.isText = true;                                                                 // Open a text box
                        this.aStall = 5;                                                                    // Stall A inputs until neutral
                    }

                    if (this.Input.B.state === ButtonState.Pressed && !this.isText && this.bStall == 0) {   // If you press B && a text box is not displayed && B is not stalled.
                        this.sMenuClose.play();                                                             // Play sound effect
                        this.closeWindow();                                                                 // Close the SoS UI.
                    }


                    if (this.isText)                                                                        // If a text box is open
                    {
                        if (this.yesNo == 0) {                                                              // If Yes/No is on "Yes".
                            this.placeOnMap(this.warpTextYes[this.cursorPos], { x: 500, y: 600 }, this.warpTextNo[this.cursorPos].height * 3, this.warpTextNo[this.cursorPos].width * 3);   // Draw yes version of dialoge.
                        }
                        else {
                            this.placeOnMap(this.warpTextNo[this.cursorPos], { x: 500, y: 600 }, this.warpTextNo[this.cursorPos].height * 3, this.warpTextNo[this.cursorPos].width * 3);    // Draw no version of dialoge.
                        }

                        if (this.Input.joystickY > 50 && !this.inputstall && this.yesNo != 0) { // If joystick is down && Joystick is not stalled. && Yes/No is on No.
                            this.yesNo = 0;
                            this.sBlip.play();
                        }

                        if (this.Input.joystickY < -50 && !this.inputstall && this.yesNo != 1) {
                            this.yesNo = 1;
                            this.sBlip.play();
                        }

                        if (this.Input.A.state >= ButtonState.Pressed && this.yesNo == 0 && this.aStall == 0) {
                            this.sMenuSelect.play();
                            this.transport(this.warpLocations[this.cursorPos]);
                            this.closeWindow();
                            this.lastWarp = this.warpLocations[this.cursorPos];
                            this.isText = false;
                            this.aStall = 5;
                        }

                        if ((this.Input.A.state >= ButtonState.Pressed && this.yesNo == 1 && this.aStall == 0) || (this.Input.B.state >= ButtonState.Pressed && this.bStall == 0)) {
                            this.sMenuClose.play();
                            this.isText = false;
                            this.aStall = 5;
                            this.bStall = 5;
                        }

                    }

                    this.ModLoader.ImGui.popStyleVar();
                }
                this.ModLoader.ImGui.end();
            }
            else if (this.owlData.equals(EMPTY_OWL_DATA))
            {
                this.ModLoader.ImGui.pushStyleVar(StyleVar.Alpha, 0.000001);
                if (this.ModLoader.ImGui.begin("Song of Soaring###Maro:SoSWindow", [this.songPlayed], WindowFlags.NoResize | WindowFlags.NoTitleBar)) {
                    this.ModLoader.ImGui.popStyleVar();
                    this.ModLoader.ImGui.pushStyleVar(StyleVar.Alpha, 1);


                    this.ModLoader.ImGui.getWindowDrawList().addImage(this.none.id, { x: 0, y: 0 }, { x: this.ModLoader.ImGui.getWindowWidth(), y: this.ModLoader.ImGui.getWindowHeight()});


                    this.ModLoader.ImGui.popStyleVar();
                }
                this.ModLoader.ImGui.end();

                if ((this.Input.B.state === ButtonState.Pressed && !this.isText && this.bStall == 0) || (this.Input.A.state >= ButtonState.Pressed && this.yesNo == 0 && this.aStall == 0)) {
                    this.sTextClose.play();
                    this.closeWindow();
                }


            }
        }

        if (this.Input.A.state == ButtonState.Up) {
            this.aStall = 0;
        }

        if (this.Input.B.state == ButtonState.Up) {
            this.bStall = 0;
        }

        if (this.Input.joystickX < 50 && !this.isText && this.Input.joystickX > -50) {
            this.inputstall = false;
        }
    }

    adjustCamera() {
        //this.ModLoader.emulator.rdramWriteBuffer((0x801C84A0 + 0x1E0 + 0x5C + 4), Buffer.from(this.core.OOT!.link.position.y.toString(16),`hex`));
        //this.ModLoader.emulator.rdramWrite16((0x801C84A0 + 0x1E0 + 0x142), 33); // Camera Setting to Free
        //this.ModLoader.emulator.rdramWrite16((0x801C84A0 + 0x1E0 + 0x144), 16); // Camera Mode to Pause

        let rawpos = this.core.OOT?.link.position.getRawPos();
        let rawrot = this.core.OOT?.link.rotation.getRawRot();

        //@ts-ignore
        let ry = rawrot?.readInt16BE(2) * s2rad;
        let campos = new Vector3(rawpos?.readFloatBE(0), rawpos?.readFloatBE(4), rawpos?.readFloatBE(8));
        let fwd = new Vector3(Math.sin(ry), 0, Math.cos(ry));
        campos = campos.plus(fwd.multiplyN(-150));
        //@ts-ignore    
        this.ModLoader.emulator.rdramWriteBuffer(0x801C84A0 + 0x1E0 + 0x50, rawpos);
        this.ModLoader.emulator.rdramWriteF32(0x801C84A0 + 0x1E0 + 0x5C + 0, campos.x);
        this.ModLoader.emulator.rdramWriteF32(0x801C84A0 + 0x1E0 + 0x5C + 4, campos.y);
        this.ModLoader.emulator.rdramWriteF32(0x801C84A0 + 0x1E0 + 0x5C + 8, campos.z);
        this.ModLoader.emulator.rdramWriteF32(0x801C84A0 + 0x1E0 + 0xD8, 0);
        this.ModLoader.emulator.rdramWriteF32(0x801C84A0 + 0x1E0 + 0xDC, 0);
        this.ModLoader.emulator.rdramWriteF32(0x801C84A0 + 0x1E0 + 0xE0, 0);
        this.ModLoader.emulator.rdramWriteF32(0x801C84A0 + 0x1E0 + 0xE4 + 0, 0);
        this.ModLoader.emulator.rdramWriteF32(0x801C84A0 + 0x1E0 + 0xE4 + 4, 0);
        this.ModLoader.emulator.rdramWriteF32(0x801C84A0 + 0x1E0 + 0xE4 + 8, 0);
        this.ModLoader.emulator.rdramWriteF32(0x801C84A0 + 0x1E0 + 0xF0 + 0, 0);
        this.ModLoader.emulator.rdramWriteF32(0x801C84A0 + 0x1E0 + 0xF0 + 4, 0);
        this.ModLoader.emulator.rdramWriteF32(0x801C84A0 + 0x1E0 + 0xF0 + 8, 0);
    }

    constrainWindow(xi: number, yi: number) {
        if (xi > this.ModLoader.ImGui.getWindowContentRegionMax().x) {
            xi = this.ModLoader.ImGui.getWindowContentRegionMax().x;
            yi = (xi * this.map.height) / this.map.width;
        }

        if (yi > this.ModLoader.ImGui.getWindowContentRegionMax().y) {
            yi = this.ModLoader.ImGui.getWindowContentRegionMax().y;
            xi = (yi * this.map.width) / this.map.height;
        }

        if (xi == this.map.width * 2 && yi == this.map.height * 2) {
            this.mapScale = 1;
        }
        else {
            this.mapScale = (this.map.width * 2) / xi;
        }

        this.mapSize = { x: xi, y: yi };
    }

    placeOnMap(image: Texture, pos: vec2, height?: number, width?: number) {
        let xval = (this.mapSize.x * pos.x) / 1000;
        let yval = (this.mapSize.y * pos.y) / 1000;
        if (height === undefined || width === undefined) {
            this.ModLoader.ImGui.getWindowDrawList().addImage(image.id, { x: xval - ((image.width / 2) / this.mapScale), y: yval - ((image.height / 2) / this.mapScale) }, { x: xval + ((image.width / 2) / this.mapScale), y: yval + ((image.height / 2) / this.mapScale) });
        }
        else {
            this.ModLoader.ImGui.getWindowDrawList().addImage(image.id, { x: xval - ((width / 2) / this.mapScale), y: yval - ((height / 2) / this.mapScale) }, { x: xval + ((width / 2) / this.mapScale), y: yval + ((height / 2) / this.mapScale) });
        }


    }

    indexToOffset(i: number): number {
        return 7 - i;
    }

    closeWindow()
    {
        this.sTextClose.play();
        this.songPlayed = false;
        this.open = false;
        this.onOpen = true;
    }

    spawnOwl(i: number) {
        let bit = i > 7 ? this.indexToOffset(i - 8) : this.indexToOffset(i);
        let byte = i > 7 ? 1 : 0;
        let sb = new SmartBuffer();
        sb.writeUInt8(byte);
        sb.writeUInt8(bit);
        this.owlStatue.spawnActorRXY_Z(sb.toBuffer().readUInt16BE(0), this.model, 0, new Vector3(0, 0, 0)).then((actor: IActor) => {
            if (this.core.OOT!.save.age === AgeOrForm.ADULT) {
                actor.position.setRawPos(this.locations[i].adultStatueSpawn);
                actor.rotation.setRawRot(this.locations[i].adultStatueRot);
            } else {
                actor.position.setRawPos(this.locations[i].childStatueSpawn);
                actor.rotation.setRawRot(this.locations[i].childStatueRot);
            }
            this.currentOwl = actor;
        });
    }

    indexWarpCrash() {
        this.core.OOT?.commandBuffer.arbitraryFunctionCall(0x80000180, 0, 0);
        this.ModLoader.logger.error("Get index crashed pleb.");
    }

}

interface IWarpLocation {
    mapLoc: vec2;
    entranceIndex: number[];
    sceneIndex: number[];
}









