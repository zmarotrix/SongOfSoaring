"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAVE_DATA_POINTER = void 0;
const CoreInjection_1 = require("modloader64_api/CoreInjection");
const ModLoaderAPIInjector_1 = require("modloader64_api/ModLoaderAPIInjector");
const PluginLifecycle_1 = require("modloader64_api/PluginLifecycle");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const ButtonState_1 = require("./ButtonState");
const bitwise_1 = __importDefault(require("bitwise"));
const EventHandler_1 = require("modloader64_api/EventHandler");
const imports_1 = require("Z64Lib/API/imports");
const Vector3_1 = __importDefault(require("modloader64_api/math/Vector3"));
const zzstatic2_1 = require("Z64Lib/API/Utilities/zzstatic2");
const OoTSceneEnum_1 = require("./OoTSceneEnum");
const smart_buffer_1 = require("smart-buffer");
const SidedProxy_1 = require("modloader64_api/SidedProxy/SidedProxy");
const MapHelper_1 = __importDefault(require("./MapHelper"));
//TO DO LIST!
// - How the fuck do I read songs?
// - Index Warp
// Hidden Owl placement
// Extra warp locations
// Implement Map Reading
const s2rad = Math.PI / 32768.0;
const rad2s = 32768.0 / Math.PI;
const EMPTY_OWL_DATA = Buffer.alloc(2, 0);
const EMPTY_SONG_DATA = Buffer.alloc(16, 0);
const SONG_NOTE_POINTER = 0x80121F38;
const SONG_LENGTH_POINTER = 0x80121F40;
const SONG_OF_SOARING = Buffer.from([0x05, 0x0B, 0x0E, 0x05, 0x0B, 0x0E]);
exports.SAVE_DATA_POINTER = 0x8011B874;
class SongOfSoaringClient {
    ModLoader;
    core;
    Input;
    mapHelper;
    songPlayed = false;
    owlData = Buffer.alloc(2, 0);
    noteData = Buffer.alloc(2, 0);
    owl;
    map;
    cursor;
    none;
    sBlip;
    sMenuOpen;
    sMenuSelect;
    sMenuClose;
    sTextClose;
    ඞ = false; //🥺👉👈
    boot = true;
    open = true;
    onOpen = true;
    saveLoaded = false;
    inputstall = false;
    hiddenOwl = false;
    aStall = 0;
    bStall = 0;
    isText = false;
    yesNo = 0;
    hasWarped = 0;
    selection;
    kakPos = { x: 100, y: 100 };
    mapSize = { x: 0, y: 0 };
    mapScale = 1;
    cursorPos;
    mapPos = { x: 0, y: 0 };
    lastWarp;
    debug = false;
    id = [0];
    owlStatue;
    locations = [];
    model = 0;
    currentOwl;
    warpingHandler;
    Kakariko = {
        mapLoc: { x: 658, y: 248 },
        entranceIndex: [0x00DB, 0x00DB],
        sceneIndex: [OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.kakariko_village).id, OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.kakariko_village).id]
    };
    GerudoRiver = {
        mapLoc: { x: 230, y: 380 },
        entranceIndex: [0x0117, 0x0117],
        sceneIndex: [OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.gerudo_valley).id, OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.gerudo_valley).id]
    };
    Fishing = {
        mapLoc: { x: 460, y: 800 },
        entranceIndex: [0x0102, 0x0102],
        sceneIndex: [OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.lake_hylia).id, OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.lake_hylia).id]
    };
    GoronCity = {
        mapLoc: { x: 650, y: 100 },
        entranceIndex: [0x013D, 0x013D],
        sceneIndex: [OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.death_mountain_trail).id, OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.death_mountain_trail).id]
    };
    DesertColossus = {
        mapLoc: { x: 50, y: 250 },
        entranceIndex: [0x0123, 0x0123],
        sceneIndex: [OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.desert_colossus).id, OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.desert_colossus).id]
    };
    KokiriForest = {
        mapLoc: { x: 800, y: 575 },
        entranceIndex: [0x0211, 0x0211],
        sceneIndex: [OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.kokiri_forest).id, OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.kokiri_forest).id]
    };
    LonLon = {
        mapLoc: { x: 475, y: 425 },
        entranceIndex: [0x0157, 0x0157],
        sceneIndex: [OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.lon_lon_ranch).id, OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.lon_lon_ranch).id]
    };
    ZoraDomain = {
        mapLoc: { x: 930, y: 300 },
        entranceIndex: [0x01A1, 0x01A1],
        sceneIndex: [OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.zora_domain).id, OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.zora_domain).id]
    };
    CastleField = {
        mapLoc: { x: 515, y: 130 },
        entranceIndex: [0x023D, 0x0138],
        sceneIndex: [OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.ganon_castle_exterior).id, OoTSceneEnum_1.Scenes.get(OoTSceneEnum_1.SCENES.hyrule_castle).id]
    };
    warpLocations = [
        this.Kakariko,
        this.KokiriForest,
        this.ZoraDomain,
        this.DesertColossus,
        this.GerudoRiver,
        this.Fishing,
        this.LonLon,
        this.CastleField,
        this.GoronCity // 8 -
    ];
    warpTextYes = [];
    warpTextNo = [];
    onSaveLoad() {
        this.saveLoaded = true;
        this.owlData = this.ModLoader.emulator.rdramReadBuffer(exports.SAVE_DATA_POINTER, 2);
    }
    onTick() {
        this.owlData.writeUInt16BE(this.ModLoader.emulator.rdramRead16(exports.SAVE_DATA_POINTER), 0);
        if (!(this.hasWarped <= 0)) {
            if (this.hasWarped == 1) {
                let iTemp = Buffer.alloc(0xC, 0);
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
    onSceneChange(scene) {
        this.currentOwl = undefined;
        for (let i = 0; i < this.locations.length; i++) {
            if (this.locations[i].scene[this.core.OOT.save.age] === scene) {
                this.spawnOwl(i);
                break;
            }
        }
    }
    onPayLoad(evt) {
        if (evt.file === "OwlStatue.ovl") {
            this.owlStatue = evt.result;
            let temp = this.ModLoader.emulator.rdramReadBuffer(evt.result.pointer, evt.result.size);
            let zz = new zzstatic2_1.zzstatic2();
            let model = temp.slice(0x5F0);
            zz.repoint(model, evt.result.pointer + 0x5F0);
            this.ModLoader.emulator.rdramWriteBuffer(evt.result.pointer, temp);
            this.model = evt.result.pointer;
        }
    }
    init() {
        this.Input = new ButtonState_1.Z64Input(this.ModLoader.emulator, 0x801C84B4);
    }
    postinit() {
        this.locations = JSON.parse(fs.readFileSync(path.resolve(__dirname, "owl.json")).toString());
    }
    transport(warp) {
        console.log(warp);
        this.currentOwl = undefined;
        this.ModLoader.emulator.rdramWrite32(0x8011B934, 0x3);
        let sb = new smart_buffer_1.SmartBuffer();
        let loc;
        for (let i = 0; i < this.locations.length; i++) {
            if (this.locations[i].scene[this.core.OOT.save.age] === warp.sceneIndex[this.core.OOT.save.age]) {
                loc = this.locations[i];
                break;
            }
        }
        if (loc === undefined) {
            return;
        }
        let pos = this.core.OOT.save.age === 0 ? loc.adultSpawnPos : loc.childSpawnPos;
        let rot = this.core.OOT.save.age === 0 ? loc.adultSpawnRot : loc.childSpawnRot;
        let rawpos = this.core.OOT.save.age === 0 ? loc.adultStatueSpawn : loc.childStatueSpawn;
        let rawrot = this.core.OOT.save.age === 0 ? loc.adultStatueRot : loc.childStatueRot;
        let linkpos = new Vector3_1.default(rawpos.readFloatBE(0), rawpos.readFloatBE(4), rawpos.readFloatBE(8));
        let ry = rawrot.readInt16BE(2) * s2rad;
        linkpos = linkpos.plus(new Vector3_1.default(Math.sin(ry), 0, Math.cos(ry)).multiplyN(60));
        ry = Math.floor(ry * rad2s);
        pos.writeFloatBE(linkpos.x, 0);
        pos.writeFloatBE(linkpos.y, 4);
        pos.writeFloatBE(linkpos.z, 8);
        if (Math.sign(ry) >= 0) {
            ry = (ry - 0x8000) % 0x10000;
            rot.writeInt16BE(ry, 2);
        }
        else {
            ry = (ry + 0x8000) % 0x10000;
            rot.writeInt16BE(ry, 2);
        }
        sb.writeBuffer(pos);
        sb.writeInt16BE(ry); // yaw
        sb.writeUInt16BE(0x02FF); // player variable
        sb.writeUInt16BE(warp.entranceIndex[this.core.OOT.save.age]); // entrance index
        sb.writeUInt8(0); // room id
        sb.writeUInt8(0xFF); // data?
        sb.writeUInt32BE(0); // flag shit 1
        sb.writeUInt32BE(0); // flag shit 2
        this.ModLoader.emulator.rdramWriteBuffer(0x8011B938 + (0 * 0x1C), sb.toBuffer());
        this.ModLoader.emulator.rdramWriteBuffer(0x8011B938 + (1 * 0x1C), sb.toBuffer());
        this.ModLoader.emulator.rdramWriteBuffer(0x8011B938 + (2 * 0x1C), sb.toBuffer());
        this.core.OOT.commandBuffer.runWarp(warp.entranceIndex[this.core.OOT.save.age], 0, undefined, 0x08).then(() => {
            this.warpingHandler = this.ModLoader.utils.setIntervalFrames(() => {
                if (this.core.OOT.global.scene === (loc.scene[this.core.OOT.save.age]) && this.core.OOT.global.scene_framecount < 20) {
                    this.core.OOT.link.rotation.setRawRot(rot);
                    this.ModLoader.utils.clearIntervalFrames(this.warpingHandler);
                    this.warpingHandler = undefined;
                }
            }, 1);
        });
        this.hasWarped = 75;
    }
    getForwardBit(buf, start = 0) {
        let bits = this.ModLoader.emulator.rdramReadBitsBuffer(exports.SAVE_DATA_POINTER, 2);
        if (start > 9)
            start = 0;
        for (let i = start; i < bits.byteLength; i++) {
            if (bits[i] === 1) {
                return i;
            }
        }
        return this.getForwardBit(buf);
    }
    getBackwardBit(buf, start = 0) {
        let bits = this.ModLoader.emulator.rdramReadBitsBuffer(exports.SAVE_DATA_POINTER, 2);
        if (start === -1)
            start = 9;
        for (let i = start; i >= 0; i--) {
            if (bits[i] === 1) {
                return i;
            }
        }
        return this.getBackwardBit(buf, bits.byteLength - 1);
    }
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
            const texTemp = (tex) => {
                let temp = this.ModLoader.Gfx.createTexture();
                temp.loadFromFile(path.resolve(__dirname, tex));
                return temp;
            };
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
            this.none = texTemp("Text/None.png");
        }
    }
    onViUpdate() {
        if (this.hasWarped != 0 && this.core.OOT.global.scene_framecount < 200) {
            //this.adjustCamera();
        }
        if (!this.songPlayed && this.core.OOT?.link.state === 3 /* OCARINA */) {
            this.noteData = this.ModLoader.emulator.rdramReadBuffer(SONG_NOTE_POINTER, 8);
            let notecount = this.ModLoader.emulator.rdramRead8(SONG_LENGTH_POINTER);
            if (this.noteData.slice(0, notecount).includes(SONG_OF_SOARING)) {
                this.songPlayed = true;
                notecount = 0;
            }
        }
        if (this.core.OOT?.link.state === 3 /* OCARINA */ || this.debug) {
            this.Input.step(this.core.OOT.global.framecount); // required for Input
        }
        if (this.Input.DUp.state === ButtonState_1.ButtonState.Down && this.Input.Z.state === ButtonState_1.ButtonState.Down) { // Detect when song is played.
            this.songPlayed = true; //TODO
        }
        if (this.songPlayed) { // Song is played.
            if (this.onOpen) { // Check to see if this is the first loop after being played.
                this.sMenuOpen.play(); // Play open menu sound
                if (!this.owlData.equals(EMPTY_OWL_DATA)) { // Ensure the owl array is not empty.
                    this.cursorPos = this.getForwardBit(this.owlData, 0); // set cursor position the next avaliable owl location.
                }
                else { // Otherwise
                    this.cursorPos = this.mapHelper.cursorPos; // Set cursor position to the Map Index.
                }
                this.onOpen = false; // This is not longer the firsty run. 
            }
            this.core.OOT.link.redeadFreeze = 4; // Stall Links motion. 
            this.open = true; // Set the window as open.
            this.mapPos = { x: this.ModLoader.ImGui.getWindowPos().x + ((this.ModLoader.ImGui.getMainViewport().size.x / 2) - this.mapSize.x / 2), y: this.ModLoader.ImGui.getWindowPos().y + ((this.ModLoader.ImGui.getMainViewport().size.y / 2) - this.mapSize.y / 2) - 12 }; // Calculates maps potision.
            this.constrainWindow(this.ModLoader.ImGui.getWindowWidth(), this.ModLoader.ImGui.getWindowHeight()); // Calculates the windows height and width based on modloaders size.
            this.ModLoader.ImGui.setNextWindowPos(this.mapPos); //sets the windows position to the calculated position above. 
            this.ModLoader.ImGui.setNextWindowSize(this.mapSize); // Sets the maps size to the values calculated above.
            if (!this.owlData.equals(EMPTY_OWL_DATA) || this.hiddenOwl) { //Has an owl been hit? Hidden or otherwise.
                this.ModLoader.ImGui.pushStyleVar(0 /* Alpha */, 0.000001); // Makes the IMGui window the map is on invisible.
                if (this.ModLoader.ImGui.begin("Song of Soaring###Maro:SoSWindow", [this.songPlayed], 2 /* NoResize */ | 1 /* NoTitleBar */)) { // Starts the SoS Window.
                    this.ModLoader.ImGui.popStyleVar(); // Clears the invisible Style Var
                    this.ModLoader.ImGui.pushStyleVar(0 /* Alpha */, 1); // Sets the contents of the window to visible.
                    this.ModLoader.ImGui.getWindowDrawList().addImage(this.map.id, { x: 0, y: 0 }, { x: this.ModLoader.ImGui.getWindowWidth(), y: this.ModLoader.ImGui.getWindowHeight() }); // Draws map to window.
                    for (let i = 0; i < this.warpLocations.length; i++) { // For every owl location
                        if (i < bitwise_1.default.byte.read(this.owlData[0]).length) { // If you are in the first byte.
                            if (Boolean(bitwise_1.default.byte.read(this.owlData[0])[i])) { // For every bit in the first byte.
                                this.placeOnMap(this.owl, this.warpLocations[i].mapLoc); // Draw it on the map if its activated.
                            }
                        }
                        if (Boolean(bitwise_1.default.byte.read(this.owlData[1])[0])) { // If you are in the second byte
                            this.placeOnMap(this.owl, this.warpLocations[8].mapLoc); // Place this owl if activated. 
                        }
                    }
                    if (this.Input.joystickX > 50 && !this.isText && !this.inputstall) { // MENU INPUTS
                        if (this.owlData.equals(EMPTY_OWL_DATA)) { // If no owls have been hit
                            this.sBlip.play(); // play sound effect   
                            this.indexWarpCrash(); // Crash the game lmao
                            this.closeWindow(); // Close the window for the crash.
                            return; // Stop VI Update loop.
                        }
                        else { // Otherwise
                            this.sBlip.play(); // Play sound effect
                            this.cursorPos = this.getForwardBit(this.owlData, this.cursorPos + 1); // Get the next activated owl and change the cursor pos.
                        }
                        this.inputstall = true; // Don't take further lef/right input until stick neutral  
                    }
                    if (this.Input.joystickX < -50 && !this.isText && !this.inputstall) { // If joystick left
                        if (this.owlData.equals(EMPTY_OWL_DATA)) { // If no owls have been hit
                            this.sBlip.play(); // play sound effect 
                            this.indexWarpCrash(); // Crash the game lmao
                            this.closeWindow(); // Close the SoS UI.
                            return; // Stop VI Update loop.
                        }
                        else { // Otherwise
                            this.sBlip.play(); // Play sound effect
                            this.cursorPos = this.getBackwardBit(this.owlData, this.cursorPos - 1); // Get the next activated owl and change the cursor pos.
                        }
                        this.inputstall = true; // Don't take further lef/right input until stick neutral  
                    }
                    this.placeOnMap(this.cursor, this.warpLocations[this.cursorPos].mapLoc); // Draw cursor on map.
                    if (this.Input.A.state >= ButtonState_1.ButtonState.Pressed && !this.isText && this.aStall == 0) { // If you press A && a text box is not displayed && A is not stalled.
                        this.sMenuSelect.play(); // Play sound effect
                        this.yesNo = 0; // Reset Yes/No cursor pos
                        this.isText = true; // Open a text box
                        this.aStall = 5; // Stall A inputs until neutral
                    }
                    if (this.Input.B.state === ButtonState_1.ButtonState.Pressed && !this.isText && this.bStall == 0) { // If you press B && a text box is not displayed && B is not stalled.
                        this.sMenuClose.play(); // Play sound effect
                        this.closeWindow(); // Close the SoS UI.
                    }
                    if (this.isText) // If a text box is open
                     {
                        if (this.yesNo == 0) { // If Yes/No is on "Yes".
                            this.placeOnMap(this.warpTextYes[this.cursorPos], { x: 500, y: 600 }, this.warpTextNo[this.cursorPos].height * 3, this.warpTextNo[this.cursorPos].width * 3); // Draw yes version of dialoge.
                        }
                        else {
                            this.placeOnMap(this.warpTextNo[this.cursorPos], { x: 500, y: 600 }, this.warpTextNo[this.cursorPos].height * 3, this.warpTextNo[this.cursorPos].width * 3); // Draw no version of dialoge.
                        }
                        if (this.Input.joystickY > 50 && !this.inputstall && this.yesNo != 0) { // If joystick is down && Joystick is not stalled. && Yes/No is on No.
                            this.yesNo = 0;
                            this.sBlip.play();
                        }
                        if (this.Input.joystickY < -50 && !this.inputstall && this.yesNo != 1) {
                            this.yesNo = 1;
                            this.sBlip.play();
                        }
                        if (this.Input.A.state >= ButtonState_1.ButtonState.Pressed && this.yesNo == 0 && this.aStall == 0) {
                            this.sMenuSelect.play();
                            this.transport(this.warpLocations[this.cursorPos]);
                            this.closeWindow();
                            this.lastWarp = this.warpLocations[this.cursorPos];
                            this.isText = false;
                            this.aStall = 5;
                        }
                        if ((this.Input.A.state >= ButtonState_1.ButtonState.Pressed && this.yesNo == 1 && this.aStall == 0) || (this.Input.B.state >= ButtonState_1.ButtonState.Pressed && this.bStall == 0)) {
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
            else if (this.owlData.equals(EMPTY_OWL_DATA)) {
                this.ModLoader.ImGui.pushStyleVar(0 /* Alpha */, 0.000001);
                if (this.ModLoader.ImGui.begin("Song of Soaring###Maro:SoSWindow", [this.songPlayed], 2 /* NoResize */ | 1 /* NoTitleBar */)) {
                    this.ModLoader.ImGui.popStyleVar();
                    this.ModLoader.ImGui.pushStyleVar(0 /* Alpha */, 1);
                    this.ModLoader.ImGui.getWindowDrawList().addImage(this.none.id, { x: 0, y: 0 }, { x: this.ModLoader.ImGui.getWindowWidth(), y: this.ModLoader.ImGui.getWindowHeight() });
                    this.ModLoader.ImGui.popStyleVar();
                }
                this.ModLoader.ImGui.end();
                if ((this.Input.B.state === ButtonState_1.ButtonState.Pressed && !this.isText && this.bStall == 0) || (this.Input.A.state >= ButtonState_1.ButtonState.Pressed && this.yesNo == 0 && this.aStall == 0)) {
                    this.closeWindow();
                }
            }
        }
        if (this.Input.A.state == ButtonState_1.ButtonState.Up) {
            this.aStall = 0;
        }
        if (this.Input.B.state == ButtonState_1.ButtonState.Up) {
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
        let campos = new Vector3_1.default(rawpos?.readFloatBE(0), rawpos?.readFloatBE(4), rawpos?.readFloatBE(8));
        let fwd = new Vector3_1.default(Math.sin(ry), 0, Math.cos(ry));
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
    constrainWindow(xi, yi) {
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
    placeOnMap(image, pos, height, width) {
        let xval = (this.mapSize.x * pos.x) / 1000;
        let yval = (this.mapSize.y * pos.y) / 1000;
        if (height === undefined || width === undefined) {
            this.ModLoader.ImGui.getWindowDrawList().addImage(image.id, { x: xval - ((image.width / 2) / this.mapScale), y: yval - ((image.height / 2) / this.mapScale) }, { x: xval + ((image.width / 2) / this.mapScale), y: yval + ((image.height / 2) / this.mapScale) });
        }
        else {
            this.ModLoader.ImGui.getWindowDrawList().addImage(image.id, { x: xval - ((width / 2) / this.mapScale), y: yval - ((height / 2) / this.mapScale) }, { x: xval + ((width / 2) / this.mapScale), y: yval + ((height / 2) / this.mapScale) });
        }
    }
    indexToOffset(i) {
        return 7 - i;
    }
    closeWindow() {
        this.songPlayed = false;
        this.open = false;
        this.onOpen = true;
        this.ModLoader.emulator.rdramWriteBuffer(SONG_NOTE_POINTER, EMPTY_SONG_DATA);
    }
    spawnOwl(i) {
        let bit = i > 7 ? this.indexToOffset(i - 8) : this.indexToOffset(i);
        let byte = i > 7 ? 1 : 0;
        let sb = new smart_buffer_1.SmartBuffer();
        sb.writeUInt8(byte);
        sb.writeUInt8(bit);
        this.owlStatue.spawnActorRXY_Z(sb.toBuffer().readUInt16BE(0), this.model, 0, new Vector3_1.default(0, 0, 0)).then((actor) => {
            if (this.core.OOT.save.age === 0 /* ADULT */) {
                actor.position.setRawPos(this.locations[i].adultStatueSpawn);
                actor.rotation.setRawRot(this.locations[i].adultStatueRot);
            }
            else {
                actor.position.setRawPos(this.locations[i].childStatueSpawn);
                actor.rotation.setRawRot(this.locations[i].childStatueRot);
            }
            this.currentOwl = actor;
        });
    }
    indexWarpCrash() {
        this.core.OOT?.commandBuffer.arbitraryFunctionCall(0x80000180, 0, 0);
        this.ModLoader.logger.error("Index Crash... That's rough buddy.");
    }
}
__decorate([
    (0, ModLoaderAPIInjector_1.ModLoaderAPIInject)()
], SongOfSoaringClient.prototype, "ModLoader", void 0);
__decorate([
    (0, CoreInjection_1.InjectCore)()
], SongOfSoaringClient.prototype, "core", void 0);
__decorate([
    (0, SidedProxy_1.SidedProxy)(0 /* CLIENT */, MapHelper_1.default)
], SongOfSoaringClient.prototype, "mapHelper", void 0);
__decorate([
    (0, EventHandler_1.EventHandler)(imports_1.Z64.OotEvents.ON_SAVE_LOADED)
], SongOfSoaringClient.prototype, "onSaveLoad", null);
__decorate([
    (0, PluginLifecycle_1.onTick)()
], SongOfSoaringClient.prototype, "onTick", null);
__decorate([
    (0, EventHandler_1.EventHandler)(imports_1.Z64.OotEvents.ON_SCENE_CHANGE)
], SongOfSoaringClient.prototype, "onSceneChange", null);
__decorate([
    (0, EventHandler_1.EventHandler)(EventHandler_1.EventsClient.ON_PAYLOAD_INJECTED)
], SongOfSoaringClient.prototype, "onPayLoad", null);
__decorate([
    (0, PluginLifecycle_1.Init)()
], SongOfSoaringClient.prototype, "init", null);
__decorate([
    (0, PluginLifecycle_1.Postinit)()
], SongOfSoaringClient.prototype, "postinit", null);
__decorate([
    (0, PluginLifecycle_1.onCreateResources)()
], SongOfSoaringClient.prototype, "onResourceLoad", null);
__decorate([
    (0, PluginLifecycle_1.onViUpdate)() // Once per vertical interrupt (refresh, buffer swap)
], SongOfSoaringClient.prototype, "onViUpdate", null);
exports.default = SongOfSoaringClient;
//# sourceMappingURL=SongOfSoaringClient.js.map