import SongOfSoaringClient from "./SongOfSoaringClient";
import { ProxySide, SidedProxy } from 'modloader64_api/SidedProxy/SidedProxy';
import path from 'path';
import { Z64_GAME } from "Z64Lib/src/Common/types/GameAliases";
import { Z64LibSupportedGames } from "Z64Lib/API/Utilities/Z64LibSupportedGames";

export default class SongOfSoaring{
    @SidedProxy(ProxySide.CLIENT, path.resolve(__dirname, "SongOfSoaringClient.js"), "Z64Lib", () => { return Z64_GAME === Z64LibSupportedGames.OCARINA_OF_TIME })
    client!: SongOfSoaringClient;
}