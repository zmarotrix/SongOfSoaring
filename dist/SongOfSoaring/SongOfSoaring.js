"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SidedProxy_1 = require("modloader64_api/SidedProxy/SidedProxy");
const path_1 = __importDefault(require("path"));
const GameAliases_1 = require("Z64Lib/src/Common/types/GameAliases");
const Z64LibSupportedGames_1 = require("Z64Lib/API/Utilities/Z64LibSupportedGames");
class SongOfSoaring {
    client;
}
__decorate([
    (0, SidedProxy_1.SidedProxy)(0 /* CLIENT */, path_1.default.resolve(__dirname, "SongOfSoaringClient.js"), "Z64Lib", () => { return GameAliases_1.Z64_GAME === Z64LibSupportedGames_1.Z64LibSupportedGames.OCARINA_OF_TIME; })
], SongOfSoaring.prototype, "client", void 0);
exports.default = SongOfSoaring;
//# sourceMappingURL=SongOfSoaring.js.map