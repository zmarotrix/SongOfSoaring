import { InjectCore } from 'modloader64_api/CoreInjection';
import { IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { ModLoaderAPIInject } from "modloader64_api/ModLoaderAPIInjector";
import { Init, onCreateResources, onViUpdate, Postinit } from "modloader64_api/PluginLifecycle";
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
import { IActor, Z64 } from 'Z64Lib/API/imports'
import { number_ref } from 'modloader64_api/Sylvain/ImGui';
import { AgeOrForm, IOvlPayloadResult } from 'Z64Lib/API/Common/Z64API';
import Vector3 from 'modloader64_api/math/Vector3';
import { zzstatic2 } from 'Z64Lib/API/Utilities/zzstatic2';
import { SCENES, Scenes } from './OoTSceneEnum';
import { Sound } from 'modloader64_api/Sound/sfml_audio';
import { SmartBuffer } from 'smart-buffer';
import { ISongOfSoaringClient } from './SongOfSoaring';

interface OwlData {
    id: number;
    scene: Array<number>;
    mapLoc: vec2;
    childStatueSpawn: Buffer;
    childStatueRot: Buffer;
    adultStatueSpawn: Buffer;
    adultStatueRot: Buffer;
    isConfigured: Array<boolean>;
}

const EMPTY_OWL_DATA: Buffer = Buffer.alloc(2, 0);

export default class SongOfSoaringClient implements ISongOfSoaringClient {
    @ModLoaderAPIInject()
    ModLoader!: IModLoaderAPI;
    @InjectCore()
    core!: IZ64Main;
    Input!: Z64Input;

    songPlayed: boolean = true;
    owlData: Buffer = Buffer.alloc(2, 0);
    owl!: Texture;
    map!: Texture;
    cursor!: Texture;
    blip!: Sound;
    boot: boolean = true;
    open: boolean = true;
    onOpen: boolean = true;
    saveLoaded: boolean = false;
    inputstall: boolean = false;
    selection!: vec2;
    kakPos = { x: 100, y: 100 };
    mapSize = { x: 0, y: 0 };
    mapScale: number = 1;
    cursorPos!: number;
    mapPos = { x: 0, y: 0 };

    id: number_ref = [0];
    owlStatue!: IOvlPayloadResult;
    locations: Array<OwlData> = [];
    model: number = 0;
    currentOwl: IActor | undefined;

    Kakariko: IWarpLocation = {
        mapLoc: { x: 658, y: 248 },
        childStatueSpawn: { x: 0, y: 0, z: 0 },
        childStatueRot: { x: 0, y: 0, z: 0 },
        adultStatueSpawn: { x: 0, y: 0, z: 0 },
        adultStatueRot: { x: 0, y: 0, z: 0 },
        entranceIndex: 0x00DB,
        sceneIndex: Scenes.get(SCENES.kakariko_village)!.id
    };

    GerudoRiver: IWarpLocation = {
        mapLoc: { x: 230, y: 380 },
        childStatueSpawn: { x: 0, y: 0, z: 0 },
        childStatueRot: { x: 0, y: 0, z: 0 },
        adultStatueSpawn: { x: 0, y: 0, z: 0 },
        adultStatueRot: { x: 0, y: 0, z: 0 },
        entranceIndex: 0x0117,
        sceneIndex: Scenes.get(SCENES.gerudo_valley)!.id
    };

    Fishing: IWarpLocation = {
        mapLoc: { x: 460, y: 800 },
        childStatueSpawn: { x: 0, y: 0, z: 0 },
        childStatueRot: { x: 0, y: 0, z: 0 },
        adultStatueSpawn: { x: 0, y: 0, z: 0 },
        adultStatueRot: { x: 0, y: 0, z: 0 },
        entranceIndex: 0x0102,
        sceneIndex: Scenes.get(SCENES.lake_hylia)!.id
    };

    GoronCity: IWarpLocation = {
        mapLoc: { x: 650, y: 100 },
        childStatueSpawn: { x: 0, y: 0, z: 0 },
        childStatueRot: { x: 0, y: 0, z: 0 },
        adultStatueSpawn: { x: 0, y: 0, z: 0 },
        adultStatueRot: { x: 0, y: 0, z: 0 },
        entranceIndex: 0x014D,
        sceneIndex: Scenes.get(SCENES.goron_city)!.id
    };

    DesertColossus: IWarpLocation = {
        mapLoc: { x: 50, y: 250 },
        childStatueSpawn: { x: 0, y: 0, z: 0 },
        childStatueRot: { x: 0, y: 0, z: 0 },
        adultStatueSpawn: { x: 0, y: 0, z: 0 },
        adultStatueRot: { x: 0, y: 0, z: 0 },
        entranceIndex: 0x0123,
        sceneIndex: Scenes.get(SCENES.desert_colossus)!.id
    };

    KokiriForest: IWarpLocation = {
        mapLoc: { x: 800, y: 575 },
        childStatueSpawn: { x: 0, y: 0, z: 0 },
        childStatueRot: { x: 0, y: 0, z: 0 },
        adultStatueSpawn: { x: 0, y: 0, z: 0 },
        adultStatueRot: { x: 0, y: 0, z: 0 },
        entranceIndex: 0x0211,
        sceneIndex: Scenes.get(SCENES.kokiri_forest)!.id
    };

    LonLon: IWarpLocation = {
        mapLoc: { x: 475, y: 425 },
        childStatueSpawn: { x: 0, y: 0, z: 0 },
        childStatueRot: { x: 0, y: 0, z: 0 },
        adultStatueSpawn: { x: 0, y: 0, z: 0 },
        adultStatueRot: { x: 0, y: 0, z: 0 },
        entranceIndex: 0x0157,
        sceneIndex: Scenes.get(SCENES.lon_lon_ranch)!.id
    };

    ZoraDomain: IWarpLocation = {
        mapLoc: { x: 930, y: 300 },
        childStatueSpawn: { x: 0, y: 0, z: 0 },
        childStatueRot: { x: 0, y: 0, z: 0 },
        adultStatueSpawn: { x: 0, y: 0, z: 0 },
        adultStatueRot: { x: 0, y: 0, z: 0 },
        entranceIndex: 0x01A1,
        sceneIndex: Scenes.get(SCENES.zora_domain)!.id
    };

    CastleField: IWarpLocation = {
        mapLoc: { x: 515, y: 130 },
        childStatueSpawn: { x: 0, y: 0, z: 0 },
        childStatueRot: { x: 0, y: 0, z: 0 },
        adultStatueSpawn: { x: 0, y: 0, z: 0 },
        adultStatueRot: { x: 0, y: 0, z: 0 },
        entranceIndex: 0x0138,
        sceneIndex: Scenes.get(SCENES.hyrule_castle)!.id
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

    @EventHandler(Z64.OotEvents.ON_SAVE_LOADED)
    onSaveLoad() {
        //TODO pick where I'm loading from.
        this.saveLoaded = true;
        bitwise.byte.read(this.owlData[0] as UInt8)
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
            let model = temp.slice(0x570);
            zz.repoint(model, evt.result.pointer + 0x570);
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
        this.currentOwl = undefined;
        this.ModLoader.emulator.rdramWrite32(0x8011B934, 0x3);
        let sb = new SmartBuffer();
        let loc: OwlData | undefined;
        for (let i = 0; i < this.locations.length; i++) {
            if (this.locations[i].scene[this.core.OOT!.save.age] === warp.sceneIndex) {
                loc = this.locations[i];
                break;
            }
        }
        if (loc === undefined) {
            return;
        }

        let s2rad = Math.PI / 32768.0;
        let rad2s = 1 / s2rad;

        let rawpos: Buffer = this.core.OOT!.save.age === 0 ? loc.adultStatueSpawn : loc.childStatueSpawn;
        let rawrot: Buffer = this.core.OOT!.save.age === 0 ? loc.adultStatueRot : loc.childStatueRot;
        let px = rawpos.readFloatBE(0);
        let py = rawpos.readFloatBE(4);
        let pz = rawpos.readFloatBE(8);
        let ry = rawrot.readInt16BE(2);
        ry *= s2rad;

        let fwd: Vector3 = new Vector3(Math.sin(ry), 0, Math.cos(ry)); // normal direction the owl is facing

        sb.writeFloatBE(px); // x
        sb.writeFloatBE(py); // y
        sb.writeFloatBE(pz); // z
        sb.writeUInt16BE(Math.floor(ry * rad2s)); // yaw
        sb.writeUInt16BE(0x02FF); // player variable
        sb.writeUInt16BE(warp.entranceIndex); // entrance index
        sb.writeUInt8(0); // room id
        sb.writeUInt8(0x28); // data?
        sb.writeUInt32BE(0); // flag shit 1
        sb.writeUInt32BE(0); // flag shit 2
        for (let i = 0; i < 3; i++) {
            this.ModLoader.emulator.rdramWriteBuffer(0x8011B938 + (i * 0x1C), sb.toBuffer());
        }

        this.core.OOT!.commandBuffer.runWarp(warp.entranceIndex, 0, undefined, 0x08);
    }

    getForwardBit(buf: Buffer, start: number = 0): number {
        let bits: number[] = [];
        for (let i = 0; i < buf.byteLength; i++) {
            let byte = buf[i];
            let _b = bitwise.byte.read(byte as UInt8);
            bits.push(..._b);
        }
        if (start > bits.length) start = 0;
        for (let i = start; i < bits.length; i++) {
            if (bits[i] === 1) {
                return i;
            }
        }
        return this.getForwardBit(buf);
    }

    getBackwardBit(buf: Buffer, start: number = 0) {
        let bits: number[] = [];
        for (let i = 0; i < buf.byteLength; i++) {
            let byte = buf[i];
            let _b = bitwise.byte.read(byte as UInt8);
            bits.push(..._b);
        }
        if (start === 0) start = bits.length - 1;
        for (let i = start; i > 0; i--) {
            if (bits[i] === 1) {
                return i;
            }
        }
        return this.getBackwardBit(buf, bits.length - 1);
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

            this.blip = this.ModLoader.sound.loadSound(path.resolve(__dirname, "OOT_PauseMenu_Cursor.wav"));
            this.ModLoader.sound.loadSound(path.resolve(__dirname, "OOT_PauseMenu_Cursor.wav")).play();


            this.mapSize = { x: this.map.width * 2, y: this.map.height * 2 }
            this.boot = false;
        }
    }

    @onViUpdate() // Once per vertical interrupt (refresh, buffer swap)
    onViUpdate() {
        if (this.saveLoaded) {
            this.owlData = this.ModLoader.emulator.rdramReadBuffer(0x8011B874, 2);
            this.songPlayed = false;
        }else{
            this.songPlayed = false;
            return;
        }

        //@ts-ignore
        this.Input.step(this.core.OOT?.global.framecount); // required for Input

        if (this.Input.DUp.state === ButtonState.Down && this.Input.Z.state === ButtonState.Down) {
            this.songPlayed = true;
        }

        if (this.songPlayed) {

            if (this.onOpen) {
                this.ModLoader.sound.loadSound(path.resolve(__dirname, "OOT_PauseMenu_Open.wav")).play();
                this.cursorPos = 0;


                if (!this.owlData.equals(EMPTY_OWL_DATA)) {
                    for (let i = 0; i < this.warpLocations.length; i++) {
                        if (i < bitwise.byte.read(this.owlData[0] as UInt8).length) {
                            if (Boolean(bitwise.byte.read(this.owlData[0] as UInt8)[i])) {
                                this.cursorPos = i;
                                break;
                            }

                            if (Boolean(bitwise.byte.read(this.owlData[1] as UInt8)[0])) {
                                this.cursorPos = i;
                                break;
                            }
                        }
                    }
                    this.placeOnMap(this.cursor, this.warpLocations[this.cursorPos].mapLoc)
                }
                else {
                    //oh god idk lol
                }
                this.onOpen = false;
            }

            this.core.OOT!.link.redeadFreeze = 4;
            this.open = true;
            this.mapPos = { x: this.ModLoader.ImGui.getWindowPos().x + ((this.ModLoader.ImGui.getWindowContentRegionMax().x / 2) - this.mapSize.x / 2), y: this.ModLoader.ImGui.getWindowPos().y + ((this.ModLoader.ImGui.getWindowContentRegionMax().y / 2) - this.mapSize.y / 2) };
            this.constrainWindow(this.ModLoader.ImGui.getWindowWidth(), this.ModLoader.ImGui.getWindowHeight());

            this.ModLoader.ImGui.setNextWindowPos(this.mapPos);
            this.ModLoader.ImGui.setNextWindowSize(this.mapSize);
            this.ModLoader.ImGui.pushStyleVar(StyleVar.Alpha, 0.000001);
            if (this.ModLoader.ImGui.begin("Song of Soaring###Maro:SoSWindow", [this.songPlayed], WindowFlags.NoResize | WindowFlags.NoTitleBar)) {
                this.ModLoader.ImGui.popStyleVar();
                this.ModLoader.ImGui.pushStyleVar(StyleVar.Alpha, 1);
                this.ModLoader.ImGui.getWindowDrawList().addRect({ x: 0, y: 0 }, { x: this.ModLoader.ImGui.getWindowWidth(), y: this.ModLoader.ImGui.getWindowHeight() }, { x: 1, y: 1, z: 1, w: 1 });

                this.ModLoader.ImGui.getWindowDrawList().addImage(this.map.id, { x: 0, y: 0 }, { x: this.ModLoader.ImGui.getWindowWidth(), y: this.ModLoader.ImGui.getWindowHeight() });

                for (let i = 0; i < this.warpLocations.length; i++) {
                    if (i < bitwise.byte.read(this.owlData[0] as UInt8).length) {
                        if (Boolean(bitwise.byte.read(this.owlData[0] as UInt8)[i])) {
                            this.placeOnMap(this.owl, this.warpLocations[i].mapLoc);
                        }
                    }
                    if (Boolean(bitwise.byte.read(this.owlData[1] as UInt8)[0])) {
                        this.placeOnMap(this.owl, this.warpLocations[i].mapLoc);
                    }
                }

                if (this.Input.joystickX > 50 && !this.inputstall) { // MENU INPUTS
                    if (this.owlData.equals(EMPTY_OWL_DATA)) {
                        this.blip.play();
                        this.indexWarpCrash();
                        this.songPlayed = false;
                        return;
                    }

                    if (this.cursorPos == this.warpLocations.length - 1) {
                        this.cursorPos = 0;
                        this.blip.play();
                    }
                    else {
                        this.blip.play();
                        this.cursorPos = this.getForwardBit(this.owlData, this.cursorPos + 1);
                    }
                    this.inputstall = true;
                }

                if (this.Input.joystickX < -50 && !this.inputstall) {

                    if (this.owlData.equals(EMPTY_OWL_DATA)) {
                        this.blip.play();
                        this.indexWarpCrash();
                        this.songPlayed = false;
                        return;
                    }

                    if (this.cursorPos == 0) {
                        this.blip.play();
                        this.cursorPos = this.warpLocations.length - 1;
                    }
                    else {
                        this.blip.play();
                        this.cursorPos = this.getBackwardBit(this.owlData, this.cursorPos - 1);
                    }
                    this.inputstall = true;
                }

                if (this.Input.joystickX < 50 && this.Input.joystickX > -50) {
                    this.inputstall = false;
                }

                this.placeOnMap(this.cursor, this.warpLocations[this.cursorPos].mapLoc)

                if (this.Input.A.state >= ButtonState.Pressed) {
                    this.ModLoader.sound.loadSound(path.resolve(__dirname, "OOT_PauseMenu_Select.wav")).play();
                    this.transport(this.warpLocations[this.cursorPos]);
                    this.songPlayed = false;
                }

                this.ModLoader.ImGui.popStyleVar();
            }
            this.ModLoader.ImGui.end();
            if (this.ModLoader.ImGui.begin("DEBUG###Maro:DEBUG")) {
                this.ModLoader.ImGui.text(`What the fuck is going on with the byte array?\n${this.owlData}`);
            }

            this.ModLoader.ImGui.end();

            if (this.Input.B.state === ButtonState.Pressed) {
                this.ModLoader.sound.loadSound(path.resolve(__dirname, "OOT_PauseMenu_Close.wav")).play();
                this.songPlayed = false;
                this.open = false;
                this.onOpen = true;
            }
        }
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

    placeOnMap(image: Texture, pos: vec2) {
        let xval = (this.mapSize.x * pos.x) / 1000;
        let yval = (this.mapSize.y * pos.y) / 1000;
        this.ModLoader.ImGui.getWindowDrawList().addImage(image.id, { x: xval - ((image.width / 2) / this.mapScale), y: yval - ((image.height / 2) / this.mapScale) }, { x: xval + ((image.width / 2) / this.mapScale), y: yval + ((image.height / 2) / this.mapScale) });
    }

    indexToOffset(i: number): number {
        return 7 - i;
    }

    spawnOwl(i: number) {
        let bit = i > 7 ? this.indexToOffset(i - 7) : this.indexToOffset(i);
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
        this.core.OOT?.commandBuffer.arbitraryFunctionCall(0x80000180, 0, 0)
        this.ModLoader.logger.error("Get index crashed pleb.")
    }

}

interface IWarpLocation {
    mapLoc: vec2;
    childStatueSpawn: vec3;
    childStatueRot: vec3;
    adultStatueSpawn: vec3;
    adultStatueRot: vec3;
    entranceIndex: number;
    sceneIndex: number;
}









