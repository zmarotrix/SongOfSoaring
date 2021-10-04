"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const CoreInjection_1 = require("modloader64_api/CoreInjection");
const EventHandler_1 = require("modloader64_api/EventHandler");
const ModLoaderAPIInjector_1 = require("modloader64_api/ModLoaderAPIInjector");
const imports_1 = require("Z64Lib/API/imports");
const GameAliases_1 = require("Z64Lib/src/Common/types/GameAliases");
class MapHelper {
    ModLoader;
    core;
    lastKnownCursorPos = 0;
    /** @description returns true if the map tab on the pause menu is open */
    isMapOpen() {
        return this.core.OOT.helper.isPaused() && this.ModLoader.emulator.rdramReadPtr8(GameAliases_1.Z64_GLOBAL_PTR, 0x10949) === 0x01;
    }
    /** @description returns either the position of the cursor */
    get cursorPos() {
        if (!this.isMapOpen())
            return this.lastKnownCursorPos;
        let pos = this.ModLoader.emulator.rdramReadPtr8(GameAliases_1.Z64_GLOBAL_PTR, 0x1099D);
        if (pos < 0x10)
            this.lastKnownCursorPos = pos;
        return this.lastKnownCursorPos;
    }
    onSceneChange(scene) {
        this.lastKnownCursorPos = 0;
    }
}
__decorate([
    (0, ModLoaderAPIInjector_1.ModLoaderAPIInject)()
], MapHelper.prototype, "ModLoader", void 0);
__decorate([
    (0, CoreInjection_1.InjectCore)()
], MapHelper.prototype, "core", void 0);
__decorate([
    (0, EventHandler_1.EventHandler)(imports_1.Z64.OotEvents.ON_SCENE_CHANGE)
], MapHelper.prototype, "onSceneChange", null);
exports.default = MapHelper;
//# sourceMappingURL=MapHelper.js.map