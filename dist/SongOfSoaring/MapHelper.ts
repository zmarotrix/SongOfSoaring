import { InjectCore } from "modloader64_api/CoreInjection";
import { EventHandler } from "modloader64_api/EventHandler";
import { IModLoaderAPI } from "modloader64_api/IModLoaderAPI";
import { ModLoaderAPIInject } from "modloader64_api/ModLoaderAPIInjector";
import { IZ64Main } from "Z64Lib/API/Common/IZ64Main";
import { Z64 } from "Z64Lib/API/imports";
import { Z64_GLOBAL_PTR } from "Z64Lib/src/Common/types/GameAliases";

export default class MapHelper {

    @ModLoaderAPIInject()
    private ModLoader!: IModLoaderAPI;
    @InjectCore()
    private core!: IZ64Main;
    private lastKnownCursorPos: number = 0;

    /** @description returns true if the map tab on the pause menu is open */
    private isMapOpen(): boolean {
        return this.core.OOT!.helper.isPaused() && this.ModLoader.emulator.rdramReadPtr8(Z64_GLOBAL_PTR, 0x10949) === 0x01;
    }

    /** @description returns either the position of the cursor */
    get cursorPos(): number {
        if (!this.isMapOpen()) return this.lastKnownCursorPos;
        let pos = this.ModLoader.emulator.rdramReadPtr8(Z64_GLOBAL_PTR, 0x1099D);
        if (pos < 0x10) this.lastKnownCursorPos = pos;
        return this.lastKnownCursorPos;
    }

    @EventHandler(Z64.OotEvents.ON_SCENE_CHANGE)
    private onSceneChange(scene: number){
        this.lastKnownCursorPos = 0;
    }

}