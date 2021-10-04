"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kakariko_potion_shop = exports.zora_shop = exports.goron_shop = exports.kokiri_shop = exports.bazaar = exports.back_alley_house_man_in_green = exports.carpenter_boss_house = exports.saria_house = exports.mido_house = exports.house_of_twins = exports.know_it_all_brothers_house = exports.temple_of_time_exterior_ruins = exports.temple_of_time_exterior_child_night = exports.temple_of_time_exterior_child_day = exports.market_ruins = exports.market_child_night = exports.market_child_day = exports.back_alley_child_night = exports.back_alley_child_day = exports.market_entrance_ruins = exports.market_entrance_child_night = exports.market_entrance_child_day = exports.tower_collapse_exterior = exports.ganondorf_lair = exports.bongo_bongo_lair = exports.twinrova_lair_and_nabooru_mini_boss_room = exports.morpha_lair = exports.volvagia_lair = exports.phantom_ganon_lair = exports.barinade_lair = exports.king_dodongo_lair = exports.gohma_lair = exports.treasure_box_shop = exports.inside_ganon_castle_collapsing = exports.ganon_tower_collapsing = exports.inside_ganon_castle = exports.thieves_hideout = exports.gerudo_training_ground = exports.ganon_tower = exports.ice_cavern = exports.bottom_of_the_well = exports.shadow_temple = exports.spirit_temple = exports.water_temple = exports.fire_temple = exports.forest_temple = exports.inside_jabu_jabu_belly = exports.dodongo_cavern = exports.inside_the_deku_tree = exports.SCENES = void 0;
exports.goron_city = exports.death_mountain_crater = exports.death_mountain_trail = exports.hyrule_castle = exports.haunted_wasteland = exports.gerudo_fortress = exports.desert_colossus = exports.lost_woods = exports.gerudo_valley = exports.zora_fountain = exports.zora_domain = exports.lake_hylia = exports.sacred_forest_meadow = exports.kokiri_forest = exports.zora_river = exports.graveyard = exports.kakariko_village = exports.hyrule_field = exports.house_of_skulltula = exports.ganon_tower_collapse_and_battle_arena = exports.granny_potion_shop = exports.guard_house = exports.ranch_house_and_silo = exports.bombchu_bowling_alley = exports.castle_courtyard = exports.fishing_pond = exports.dampe_grave_and_windmill = exports.cutscene_map = exports.castle_hedge_maze_night = exports.castle_hedge_maze_day = exports.chamber_of_sages = exports.temple_of_time = exports.shooting_gallery = exports.royal_family_tomb = exports.grave_fairy_fountain = exports.grave_redead = exports.grottos = exports.great_fairy_fountain_spells = exports.fairy_fountain = exports.great_fairy_fountain_upgrades = exports.gravekeeper_hut = exports.carpenters_tent = exports.lakeside_laboratory = exports.impa_house = exports.stable = exports.back_alley_house_dog_lady = exports.link_house = exports.happy_mask_shop = exports.bombchu_shop = exports.market_potion_shop = void 0;
exports.Scenes = exports.lost_scene = exports.item_testing_room = exports.action_testing_room = exports.beta_castle_courtyard = exports.dark_link_testing_area = exports.depth_test = exports.Beshitu = exports.collision_testing_area = exports.ganon_castle_exterior = exports.lon_lon_ranch = void 0;
var SCENES;
(function (SCENES) {
    SCENES[SCENES["inside_the_deku_tree"] = 0] = "inside_the_deku_tree";
    SCENES[SCENES["dodongo_cavern"] = 1] = "dodongo_cavern";
    SCENES[SCENES["inside_jabu_jabu_belly"] = 2] = "inside_jabu_jabu_belly";
    SCENES[SCENES["forest_temple"] = 3] = "forest_temple";
    SCENES[SCENES["fire_temple"] = 4] = "fire_temple";
    SCENES[SCENES["water_temple"] = 5] = "water_temple";
    SCENES[SCENES["spirit_temple"] = 6] = "spirit_temple";
    SCENES[SCENES["shadow_temple"] = 7] = "shadow_temple";
    SCENES[SCENES["bottom_of_the_well"] = 8] = "bottom_of_the_well";
    SCENES[SCENES["ice_cavern"] = 9] = "ice_cavern";
    SCENES[SCENES["ganon_tower"] = 10] = "ganon_tower";
    SCENES[SCENES["gerudo_training_ground"] = 11] = "gerudo_training_ground";
    SCENES[SCENES["thieves_hideout"] = 12] = "thieves_hideout";
    SCENES[SCENES["inside_ganon_castle"] = 13] = "inside_ganon_castle";
    SCENES[SCENES["ganon_tower_collapsing"] = 14] = "ganon_tower_collapsing";
    SCENES[SCENES["inside_ganon_castle_collapsing"] = 15] = "inside_ganon_castle_collapsing";
    SCENES[SCENES["treasure_box_shop"] = 16] = "treasure_box_shop";
    SCENES[SCENES["gohma_lair"] = 17] = "gohma_lair";
    SCENES[SCENES["king_dodongo_lair"] = 18] = "king_dodongo_lair";
    SCENES[SCENES["barinade_lair"] = 19] = "barinade_lair";
    SCENES[SCENES["phantom_ganon_lair"] = 20] = "phantom_ganon_lair";
    SCENES[SCENES["volvagia_lair"] = 21] = "volvagia_lair";
    SCENES[SCENES["morpha_lair"] = 22] = "morpha_lair";
    SCENES[SCENES["twinrova_lair_and_nabooru_mini_boss_room"] = 23] = "twinrova_lair_and_nabooru_mini_boss_room";
    SCENES[SCENES["bongo_bongo_lair"] = 24] = "bongo_bongo_lair";
    SCENES[SCENES["ganondorf_lair"] = 25] = "ganondorf_lair";
    SCENES[SCENES["tower_collapse_exterior"] = 26] = "tower_collapse_exterior";
    SCENES[SCENES["market_entrance_child_day"] = 27] = "market_entrance_child_day";
    SCENES[SCENES["market_entrance_child_night"] = 28] = "market_entrance_child_night";
    SCENES[SCENES["market_entrance_child_ruins"] = 29] = "market_entrance_child_ruins";
    SCENES[SCENES["back_alley_child_day"] = 30] = "back_alley_child_day";
    SCENES[SCENES["back_alley_child_night"] = 31] = "back_alley_child_night";
    SCENES[SCENES["market_child_day"] = 32] = "market_child_day";
    SCENES[SCENES["market_child_night"] = 33] = "market_child_night";
    SCENES[SCENES["market_ruins"] = 34] = "market_ruins";
    SCENES[SCENES["temple_of_time_exterior_child_day"] = 35] = "temple_of_time_exterior_child_day";
    SCENES[SCENES["temple_of_time_exterior_child_night"] = 36] = "temple_of_time_exterior_child_night";
    SCENES[SCENES["temple_of_time_exterior_ruins"] = 37] = "temple_of_time_exterior_ruins";
    SCENES[SCENES["know_it_all_brothers_house"] = 38] = "know_it_all_brothers_house";
    SCENES[SCENES["house_of_twins"] = 39] = "house_of_twins";
    SCENES[SCENES["mido_house"] = 40] = "mido_house";
    SCENES[SCENES["saria_house"] = 41] = "saria_house";
    SCENES[SCENES["carpenter_boss_house"] = 42] = "carpenter_boss_house";
    SCENES[SCENES["back_alley_house_man_in_green"] = 43] = "back_alley_house_man_in_green";
    SCENES[SCENES["bazaar"] = 44] = "bazaar";
    SCENES[SCENES["kokiri_shop"] = 45] = "kokiri_shop";
    SCENES[SCENES["goron_shop"] = 46] = "goron_shop";
    SCENES[SCENES["zora_shop"] = 47] = "zora_shop";
    SCENES[SCENES["kakariko_potion_shop"] = 48] = "kakariko_potion_shop";
    SCENES[SCENES["market_potion_shop"] = 49] = "market_potion_shop";
    SCENES[SCENES["bombchu_shop"] = 50] = "bombchu_shop";
    SCENES[SCENES["happy_mask_shop"] = 51] = "happy_mask_shop";
    SCENES[SCENES["link_house"] = 52] = "link_house";
    SCENES[SCENES["back_alley_house_dog_lady"] = 53] = "back_alley_house_dog_lady";
    SCENES[SCENES["stable"] = 54] = "stable";
    SCENES[SCENES["impa_house"] = 55] = "impa_house";
    SCENES[SCENES["lakeside_laboratory"] = 56] = "lakeside_laboratory";
    SCENES[SCENES["carpenters_tent"] = 57] = "carpenters_tent";
    SCENES[SCENES["gravekeeper_hut"] = 58] = "gravekeeper_hut";
    SCENES[SCENES["great_fairy_fountain_upgrades"] = 59] = "great_fairy_fountain_upgrades";
    SCENES[SCENES["fairy_fountain"] = 60] = "fairy_fountain";
    SCENES[SCENES["great_fairy_fountain_spells"] = 61] = "great_fairy_fountain_spells";
    SCENES[SCENES["grottos"] = 62] = "grottos";
    SCENES[SCENES["grave_redead"] = 63] = "grave_redead";
    SCENES[SCENES["grave_fairy_fountain"] = 64] = "grave_fairy_fountain";
    SCENES[SCENES["royal_family_tomb"] = 65] = "royal_family_tomb";
    SCENES[SCENES["shooting_gallery"] = 66] = "shooting_gallery";
    SCENES[SCENES["temple_of_time"] = 67] = "temple_of_time";
    SCENES[SCENES["chamber_of_sages"] = 68] = "chamber_of_sages";
    SCENES[SCENES["castle_hedge_maze_day"] = 69] = "castle_hedge_maze_day";
    SCENES[SCENES["castle_hedge_maze_night"] = 70] = "castle_hedge_maze_night";
    SCENES[SCENES["cutscene_map"] = 71] = "cutscene_map";
    SCENES[SCENES["dampe_grave_and_windmill"] = 72] = "dampe_grave_and_windmill";
    SCENES[SCENES["fishing_pond"] = 73] = "fishing_pond";
    SCENES[SCENES["castle_courtyard"] = 74] = "castle_courtyard";
    SCENES[SCENES["bombchu_bowling_alley"] = 75] = "bombchu_bowling_alley";
    SCENES[SCENES["ranch_house_and_silo"] = 76] = "ranch_house_and_silo";
    SCENES[SCENES["guard_house"] = 77] = "guard_house";
    SCENES[SCENES["granny_potion_shop"] = 78] = "granny_potion_shop";
    SCENES[SCENES["ganon_tower_collapse_and_battle_arena"] = 79] = "ganon_tower_collapse_and_battle_arena";
    SCENES[SCENES["house_of_skulltula"] = 80] = "house_of_skulltula";
    SCENES[SCENES["hyrule_field"] = 81] = "hyrule_field";
    SCENES[SCENES["kakariko_village"] = 82] = "kakariko_village";
    SCENES[SCENES["graveyard"] = 83] = "graveyard";
    SCENES[SCENES["zora_river"] = 84] = "zora_river";
    SCENES[SCENES["kokiri_forest"] = 85] = "kokiri_forest";
    SCENES[SCENES["sacred_forest_meadow"] = 86] = "sacred_forest_meadow";
    SCENES[SCENES["lake_hylia"] = 87] = "lake_hylia";
    SCENES[SCENES["zora_domain"] = 88] = "zora_domain";
    SCENES[SCENES["zora_fountain"] = 89] = "zora_fountain";
    SCENES[SCENES["gerudo_valley"] = 90] = "gerudo_valley";
    SCENES[SCENES["lost_woods"] = 91] = "lost_woods";
    SCENES[SCENES["desert_colossus"] = 92] = "desert_colossus";
    SCENES[SCENES["gerudo_fortress"] = 93] = "gerudo_fortress";
    SCENES[SCENES["haunted_wasteland"] = 94] = "haunted_wasteland";
    SCENES[SCENES["hyrule_castle"] = 95] = "hyrule_castle";
    SCENES[SCENES["death_mountain_trail"] = 96] = "death_mountain_trail";
    SCENES[SCENES["death_mountain_crater"] = 97] = "death_mountain_crater";
    SCENES[SCENES["goron_city"] = 98] = "goron_city";
    SCENES[SCENES["lon_lon_ranch"] = 99] = "lon_lon_ranch";
    SCENES[SCENES["ganon_castle_exterior"] = 100] = "ganon_castle_exterior";
    SCENES[SCENES["collision_testing_area"] = 101] = "collision_testing_area";
    SCENES[SCENES["Beshitu"] = 102] = "Beshitu";
    SCENES[SCENES["depth_test"] = 103] = "depth_test";
    SCENES[SCENES["dark_link_testing_area"] = 106] = "dark_link_testing_area";
    SCENES[SCENES["beta_castle_courtyard"] = 107] = "beta_castle_courtyard";
    SCENES[SCENES["action_testing_room"] = 108] = "action_testing_room";
    SCENES[SCENES["item_testing_room"] = 109] = "item_testing_room";
    SCENES[SCENES["lost_scene"] = 110] = "lost_scene";
})(SCENES = exports.SCENES || (exports.SCENES = {}));
class inside_the_deku_tree {
    name = "Inside Deku Tree";
    id = 0;
    entranceTable = [0x0000, 0x0001, 0x0002, 0x0003, 0x0252, 0x0253, 0x0254, 0x0255];
}
exports.inside_the_deku_tree = inside_the_deku_tree;
class dodongo_cavern {
    name = "Dodongo Caverns";
    id = 1;
    entranceTable = [0x0004, 0x0005, 0x0006, 0x0007, 0x00C5, 0x00C6, 0x00C7, 0x00C8];
}
exports.dodongo_cavern = dodongo_cavern;
class inside_jabu_jabu_belly {
    name = "JabuJabus Belly";
    id = 2;
    entranceTable = [0x0028, 0x0029, 0x002A, 0x002B, 0x002C, 0x0301, 0x0302, 0x0303, 0x0304, 0x0407, 0x0408, 0x0409, 0x040A];
}
exports.inside_jabu_jabu_belly = inside_jabu_jabu_belly;
class forest_temple {
    name = "Forest Temple";
    id = 3;
    entranceTable = [0x0169, 0x016A, 0x016B, 0x016C, 0x024E, 0x024F, 0x0250, 0x0251, 0x0584, 0x0585, 0x0586, 0x0587];
}
exports.forest_temple = forest_temple;
class fire_temple {
    name = "Fire Temple";
    id = 4;
    entranceTable = [0x0165, 0x0166, 0x0167, 0x0168, 0x0175, 0x0176, 0x0177, 0x0178];
}
exports.fire_temple = fire_temple;
class water_temple {
    name = "Water Temple";
    id = 5;
    entranceTable = [0x0010, 0x0011, 0x0012, 0x0013, 0x0423, 0x0424, 0x0425, 0x0426];
}
exports.water_temple = water_temple;
class spirit_temple {
    name = "Spirit Temple";
    id = 6;
    entranceTable = [0x0082, 0x0083, 0x0084, 0x0085, 0x0086, 0x0087, 0x02F5, 0x02F6, 0x02F7, 0x02F8, 0x03F0, 0x03F1, 0x03F2, 0x03F3, 0x03F4, 0x03F5, 0x03F6, 0x03F7]; //CRASHES:  0x03F8, 0x03F9, 0x03FA, 0x03FB
}
exports.spirit_temple = spirit_temple;
class shadow_temple {
    name = "Shadow Temple";
    id = 7;
    entranceTable = [0x0037, 0x0038, 0x0039, 0x003A, 0x02B2, 0x02B3, 0x02B4, 0x02B5, 0x02B6, 0x02B7, 0x02B8, 0x02B9, 0x04EA, 0x04EB, 0x04EC, 0x04ED, 0x04EE, 0x04EF, 0x04F0, 0x04F1];
}
exports.shadow_temple = shadow_temple;
class bottom_of_the_well {
    name = "Bottom of the Well";
    id = 8;
    entranceTable = [0x0098, 0x0099, 0x009A, 0x009B, 0x05CC, 0x05CD, 0x05CE, 0x05CF];
}
exports.bottom_of_the_well = bottom_of_the_well;
class ice_cavern {
    name = "Ice Caverns";
    id = 9;
    entranceTable = [0x0088, 0x0089, 0x008A, 0x008B, 0x008C, 0x05D8, 0x05D9, 0x05DA, 0x05DB];
}
exports.ice_cavern = ice_cavern;
class ganon_tower {
    name = "Ganon's Tower";
    id = 10;
    entranceTable = [0x0200, 0x041B, 0x041C, 0x041D, 0x041E, 0x0427, 0x0428, 0x0429, 0x042A, 0x042B, 0x042C, 0x042D, 0x042E];
}
exports.ganon_tower = ganon_tower;
class gerudo_training_ground {
    name = "Gerudo Training Grounds";
    id = 11;
    entranceTable = [0x0008, 0x0009, 0x000A, 0x000B];
}
exports.gerudo_training_ground = gerudo_training_ground;
class thieves_hideout {
    name = "Thieves Hideout";
    id = 12;
    entranceTable = [0x0486, 0x0487, 0x0488, 0x0489, 0x048A, 0x048B, 0x048C, 0x048D, 0x048E, 0x048F, 0x0490, 0x0491, 0x0492, 0x0493, 0x0494, 0x0495, 0x0496, 0x0497, 0x0498, 0x0499, 0x049A, 0x049B, 0x049C, 0x049D, 0x049E, 0x049F, 0x04A0, 0x04A1, 0x04A2, 0x04A3, 0x04A4, 0x04A5, 0x04A6, 0x04A7, 0x04A8, 0x04A9, 0x04AA, 0x04AB, 0x04AC, 0x04AD, 0x04AE, 0x04AF, 0x04B0, 0x04B1, 0x04B2, 0x04B3, 0x04B4, 0x04B5, 0x0570, 0x0571, 0x0572, 0x0573];
}
exports.thieves_hideout = thieves_hideout;
class inside_ganon_castle {
    name = "Ganon's Castle";
    id = 13;
    entranceTable = [0x0467, 0x0468, 0x0469, 0x046A, 0x046B, 0x046C, 0x046D, 0x046E, 0x046F, 0x0470, 0x0471, 0x0534, 0x0535, 0x0536, 0x0537, 0x0538, 0x0539, 0x053A, 0x053B, 0x053C, 0x053D, 0x053E, 0x053F, 0x0540, 0x0541, 0x0542, 0x0543, 0x0544, 0x0545, 0x0546, 0x0547, 0x0548, 0x0549, 0x054A, 0x054B, 0x054C, 0x054D, 0x054E, 0x054];
}
exports.inside_ganon_castle = inside_ganon_castle;
class ganon_tower_collapsing {
    name = "Ganon's Tower Collapse Exterior";
    id = 14;
    entranceTable = [0x01C9, 0x01CA, 0x01CB, 0x01CC, 0x032C, 0x032D, 0x032E, 0x032F, 0x0330, 0x0331, 0x0332, 0x0333, 0x0334, 0x0335, 0x0336, 0x0337, 0x04BA, 0x04BB, 0x04BC, 0x04BD];
}
exports.ganon_tower_collapsing = ganon_tower_collapsing;
class inside_ganon_castle_collapsing {
    name = "Ganon's Tower Collapse Interior";
    id = 15;
    entranceTable = [0x0134, 0x0135, 0x0136, 0x0137, 0x001C, 0x001D, 0x001E, 0x001F, 0x0020, 0x0021, 0x0022, 0x0023, 0x0179, 0x017A, 0x017B, 0x017C, 0x01B5, 0x01B6, 0x01B7, 0x01B8, 0x0256, 0x0257, 0x04B6, 0x04B7, 0x04B8, 0x04B9, 0x056C, 0x056D, 0x056E, 0x056F];
}
exports.inside_ganon_castle_collapsing = inside_ganon_castle_collapsing;
class treasure_box_shop {
    name = "Tresure Box Shop";
    id = 16;
    entranceTable = [0x0063, 0x0064, 0x0065, 0x0066];
}
exports.treasure_box_shop = treasure_box_shop;
class gohma_lair {
    name = "Gohma's Lair";
    id = 17;
    entranceTable = [0x040F, 0x0410, 0x0411, 0x0412];
}
exports.gohma_lair = gohma_lair;
class king_dodongo_lair {
    name = "King Dodongo's Liar";
    id = 18;
    entranceTable = [0x040B, 0x040C, 0x040D, 0x040E];
}
exports.king_dodongo_lair = king_dodongo_lair;
class barinade_lair {
    name = "Barinade's Lair";
    id = 19;
    entranceTable = [];
}
exports.barinade_lair = barinade_lair;
class phantom_ganon_lair {
    name = "Phantom Ganon's Lair";
    id = 20;
    entranceTable = [0x000C, 0x000D, 0x000E, 0x000F];
}
exports.phantom_ganon_lair = phantom_ganon_lair;
class volvagia_lair {
    name = "Volvagia's Lair";
    id = 21;
    entranceTable = [0x0305, 0x0306, 0x0307, 0x0308];
}
exports.volvagia_lair = volvagia_lair;
class morpha_lair {
    name = "Morpha's Liar";
    id = 22;
    entranceTable = [0x0417, 0x0418, 0x0419, 0x041A];
}
exports.morpha_lair = morpha_lair;
class twinrova_lair_and_nabooru_mini_boss_room {
    name = "Twinrova's Liar and Naboorus Mini Boss Room";
    id = 23;
    entranceTable = [0x008D, 0x008E, 0x008F, 0x0090, 0x0091, 0x0092, 0x0093, 0x05EC, 0x05ED, 0x05EE, 0x05EF];
}
exports.twinrova_lair_and_nabooru_mini_boss_room = twinrova_lair_and_nabooru_mini_boss_room;
class bongo_bongo_lair {
    name = "Bongo Bongo's Liar";
    id = 24;
    entranceTable = [0x0413, 0x0414, 0x0415, 0x0416];
}
exports.bongo_bongo_lair = bongo_bongo_lair;
class ganondorf_lair {
    name = "Ganondorf's Liar";
    id = 25;
    entranceTable = [0x041F, 0x0420, 0x0421, 0x0422];
}
exports.ganondorf_lair = ganondorf_lair;
class tower_collapse_exterior {
    name = "Tower Collaps Exterior";
    id = 26;
    entranceTable = [0x043F, 0x0440, 0x0441, 0x0442, 0x051C, 0x051D, 0x051E, 0x051F, 0x0524, 0x0525, 0x0526, 0x0527];
}
exports.tower_collapse_exterior = tower_collapse_exterior;
class market_entrance_child_day {
    name = "Market Entrance (Child Day)";
    id = 27;
    entranceTable = [0x0033];
}
exports.market_entrance_child_day = market_entrance_child_day;
class market_entrance_child_night {
    name = "Market Entrance (Child Night)";
    id = 28;
    entranceTable = [0x0034];
}
exports.market_entrance_child_night = market_entrance_child_night;
class market_entrance_ruins {
    name = "Market Entrance (Ruins)";
    id = 29;
    entranceTable = [0x0035, 0x0036];
}
exports.market_entrance_ruins = market_entrance_ruins;
class back_alley_child_day {
    name = "Back Alley (Child Day)";
    id = 30;
    entranceTable = [0x0067, 0x0069, 0x00AD, 0x00AF, 0x029A, 0x029C, 0x038C, 0x038E, 0x03C0, 0x03C2];
}
exports.back_alley_child_day = back_alley_child_day;
class back_alley_child_night {
    name = "Back Alley (Child Night)";
    id = 31;
    entranceTable = [0x0068, 0x006A, 0x00AE, 0x00B0, 0x029B, 0x029D, 0x038D, 0x038F, 0x03C1, 0x03C3];
}
exports.back_alley_child_night = back_alley_child_night;
class market_child_day {
    name = "Market (Child Day)";
    id = 32;
    entranceTable = [0x00B1, 0x00B5, 0x01CD, 0x01D1, 0x01D5, 0x025A, 0x025E, 0x0262, 0x026E, 0x0276, 0x029E, 0x02A2, 0x03B8, 0x03BC];
}
exports.market_child_day = market_child_day;
class market_child_night {
    name = "Market (Child Night)";
    id = 33;
    entranceTable = [0x00B2, 0x01CE, 0x01D2, 0x01D6, 0x025B, 0x025F, 0x0263, 0x026F, 0x0277, 0x029F, 0x02A3, 0x03B9, 0x03BD];
}
exports.market_child_night = market_child_night;
class market_ruins {
    name = "Market (Ruins)";
    id = 34;
    entranceTable = [0x00B3, 0x00B4, 0x01CF, 0x01D0, 0x01CF, 0x001CF, 0x01D0, 0x01D3, 0x01D4, 0x01D7, 0x01D8, 0x025C, 0x025D, 0x0260, 0x0261, 0x0264, 0x0265, 0x0270, 0x0271, 0x0278, 0x0279, 0x02A0, 0x02A1, 0x02A4, 0x02A5, 0x03BA, 0x03BB, 0x03BE, 0x03BF];
}
exports.market_ruins = market_ruins;
class temple_of_time_exterior_child_day {
    name = "Temple of Time Exterior (Child Day)";
    id = 35;
    entranceTable = [0x0171, 0x0472];
}
exports.temple_of_time_exterior_child_day = temple_of_time_exterior_child_day;
class temple_of_time_exterior_child_night {
    name = "Temple of Time Exterior (Child Night)";
    id = 36;
    entranceTable = [0x0172, 0x0473];
}
exports.temple_of_time_exterior_child_night = temple_of_time_exterior_child_night;
class temple_of_time_exterior_ruins {
    name = "Temple of Time Exterior (Ruins)";
    id = 37;
    entranceTable = [0x0173, 0x0174, 0x0474, 0x0475];
}
exports.temple_of_time_exterior_ruins = temple_of_time_exterior_ruins;
class know_it_all_brothers_house {
    name = "Know-It-All Brother's House";
    id = 38;
    entranceTable = [0x00C9, 0x00CA, 0x00CB, 0x00CC];
}
exports.know_it_all_brothers_house = know_it_all_brothers_house;
class house_of_twins {
    name = "House of Twins";
    id = 39;
    entranceTable = [0x009C, 0x009D, 0x009E, 0x009F];
}
exports.house_of_twins = house_of_twins;
class mido_house {
    name = "Mido's House";
    id = 40;
    entranceTable = [0x0433, 0x0434, 0x0435, 0x0436];
}
exports.mido_house = mido_house;
class saria_house {
    name = "Saria's House";
    id = 41;
    entranceTable = [0x0437, 0x0438, 0x0439, 0x043A];
}
exports.saria_house = saria_house;
class carpenter_boss_house {
    name = "Carpenter Boss House";
    id = 42;
    entranceTable = [0x02FD, 0x02FE, 0x02FF, 0x0300];
}
exports.carpenter_boss_house = carpenter_boss_house;
class back_alley_house_man_in_green {
    name = "BAck Alley House Man in Green";
    id = 43;
    entranceTable = [0x043B, 0x043C, 0x043D, 0x043E];
}
exports.back_alley_house_man_in_green = back_alley_house_man_in_green;
class bazaar {
    name = "Bazaar";
    id = 44;
    entranceTable = [0x00B7, 0x00B8, 0x00B9, 0x00BA, 0x052C, 0x052D, 0x052E, 0x052F];
}
exports.bazaar = bazaar;
class kokiri_shop {
    name = "Kokiri Shop";
    id = 45;
    entranceTable = [0x00C1, 0x00C2, 0x00C3, 0x00C4];
}
exports.kokiri_shop = kokiri_shop;
class goron_shop {
    name = "Goron Shop";
    id = 46;
    entranceTable = [0x037C, 0x037D, 0x037E, 0x037F];
}
exports.goron_shop = goron_shop;
class zora_shop {
    name = "Zora Shop";
    id = 47;
    entranceTable = [0x0380, 0x0381, 0x0382, 0x0383];
}
exports.zora_shop = zora_shop;
class kakariko_potion_shop {
    name = "Kakariko Potion Shop";
    id = 48;
    entranceTable = [0x0384, 0x0385, 0x0386, 0x0387, 0x03E8, 0x03E9, 0x03EA, 0x03EB, 0x03EC, 0x03ED, 0x03EE, 0x03EF];
}
exports.kakariko_potion_shop = kakariko_potion_shop;
class market_potion_shop {
    name = "Market Potion Shop";
    id = 49;
    entranceTable = [0x0388, 0x0389, 0x038A, 0x038B];
}
exports.market_potion_shop = market_potion_shop;
class bombchu_shop {
    name = "Bombchu Shop";
    id = 50;
    entranceTable = [0x0390, 0x0391, 0x0392, 0x0393, 0x0528, 0x0529, 0x052A, 0x052B];
}
exports.bombchu_shop = bombchu_shop;
class happy_mask_shop {
    name = "Happy Mask Shop";
    id = 51;
    entranceTable = [0x0530, 0x0531, 0x0532, 0x0533];
}
exports.happy_mask_shop = happy_mask_shop;
class link_house {
    name = "Link's House";
    id = 52;
    entranceTable = [0x00BB, 0x00BC, 0x00BD, 0x00BE, 0x00BF, 0x00C0, 0x0272, 0x0273, 0x0274, 0x0275];
}
exports.link_house = link_house;
class back_alley_house_dog_lady {
    name = "Back Alley House Dog Lady";
    id = 53;
    entranceTable = [0x0398, 0x0399, 0x039A, 0x039B];
}
exports.back_alley_house_dog_lady = back_alley_house_dog_lady;
class stable {
    name = "Stable";
    id = 54;
    entranceTable = [0x02F9, 0x02FA, 0x02FB, 0x02FC];
}
exports.stable = stable;
class impa_house {
    name = "Impa's House";
    id = 55;
    entranceTable = [0x039C, 0x039D, 0x039E, 0x039F, 0x05C8, 0x05C9, 0x05CA, 0x05CB];
}
exports.impa_house = impa_house;
class lakeside_laboratory {
    name = "Lakeside Laboratory";
    id = 56;
    entranceTable = [0x01C5, 0x01C6, 0x01C7, 0x01C8];
}
exports.lakeside_laboratory = lakeside_laboratory;
class carpenters_tent {
    name = "Carpenters Tent";
    id = 57;
    entranceTable = [0x03A0, 0x03A1, 0x03A2, 0x03A3];
}
exports.carpenters_tent = carpenters_tent;
class gravekeeper_hut {
    name = "Graveyard Hut";
    id = 58;
    entranceTable = [0x030D, 0x030E, 0x030F, 0x0310];
}
exports.gravekeeper_hut = gravekeeper_hut;
class great_fairy_fountain_upgrades {
    name = "Great Fairy's Fountain (Upgrades)";
    id = 59;
    entranceTable = [0x0315, 0x0316, 0x0317, 0x0318, 0x0319, 0x031A, 0x031B, 0x04BE, 0x04BF, 0x04C0, 0x04C1, 0x04C2, 0x04C3, 0x04C4, 0x04C5, 0x04F2, 0x04F3, 0x04F4, 0x04F5];
}
exports.great_fairy_fountain_upgrades = great_fairy_fountain_upgrades;
class fairy_fountain {
    name = "Fairy Fountain";
    id = 60;
    entranceTable = [0x036D, 0x036E, 0x036F, 0x0370];
}
exports.fairy_fountain = fairy_fountain;
class great_fairy_fountain_spells {
    name = "Great Fairy's Fountain (Spells)";
    id = 61;
    entranceTable = [0x0371, 0x0372, 0x0373, 0x0374, 0x0375, 0x0376, 0x0377, 0x0578, 0x0579, 0x057A, 0x057B, 0x0588, 0x0589, 0x058A, 0x058B];
}
exports.great_fairy_fountain_spells = great_fairy_fountain_spells;
class grottos {
    name = "Grotto";
    id = 62;
    entranceTable = [0x003F, 0x0040, 0x0041, 0x0042, 0x0598, 0x0599, 0x059A, 0x059B, 0x059C, 0x059D, 0x059E, 0x059F, 0x05A0, 0x05A1, 0x05A2, 0x05A3, 0x05A4, 0x05A5, 0x05A6, 0x05A7, 0x05A8, 0x05A9, 0x05AA, 0x05AB, 0x05AC, 0x05AD, 0x05AE, 0x05AF, 0x05B0, 0x05B1, 0x05B2, 0x05B3, 0x05B4, 0x05B5, 0x05B6, 0x05B7, 0x05B8, 0x05B9, 0x05BA, 0x05BB, 0x05BC, 0x05BD, 0x05BE, 0x05BF, 0x05C0, 0x05C1, 0x05C2, 0x05C3, 0x05C4, 0x05C5, 0x05C6, 0x05C7, 0x05FC, 0x05FD, 0x05FE, 0x05FF];
}
exports.grottos = grottos;
class grave_redead {
    name = "Grave Redead";
    id = 63;
    entranceTable = [0x031C, 0x031D, 0x031E, 0x031F];
}
exports.grave_redead = grave_redead;
class grave_fairy_fountain {
    name = "Grave Fairy Fountain";
    id = 64;
    entranceTable = [0x004B, 0x004C, 0x004D, 0x004E];
}
exports.grave_fairy_fountain = grave_fairy_fountain;
class royal_family_tomb {
    name = "Royal Family Tomb";
    id = 65;
    entranceTable = [0x002D, 0x002E, 0x002F, 0x0030, 0x0031, 0x0032, 0x0574, 0x0575, 0x0576, 0x0577];
}
exports.royal_family_tomb = royal_family_tomb;
class shooting_gallery {
    name = "Shooting Gallery";
    id = 66;
    entranceTable = [0x003B, 0x003C, 0x003D, 0x003E, 0x016D, 0x016E, 0x016F, 0x0170, 0x02EA, 0x02EB, 0x02EC, 0x02ED, 0x02F0, 0x02F1, 0x02F2, 0x02F3, 0x02F4];
}
exports.shooting_gallery = shooting_gallery;
class temple_of_time {
    name = "Temple of Time";
    id = 67;
    entranceTable = [0x0053, 0x0054, 0x0055, 0x0056, 0x0057, 0x0058, 0x0059, 0x005A, 0x005B, 0x005C, 0x005D, 0x005E, 0x005F, 0x0060, 0x0061, 0x0062, 0x02CA, 0x02CB, 0x02CC, 0x02CD, 0x0320, 0x0321, 0x0322, 0x0323, 0x0324, 0x0325, 0x0326, 0x0327, 0x058C, 0x058D, 0x058E, 0x058F, 0x0590, 0x0591, 0x0592, 0x0593, 0x05F4, 0x05F5, 0x05F6, 0x05F7];
}
exports.temple_of_time = temple_of_time;
class chamber_of_sages {
    name = "Chamber of Sages";
    id = 68;
    entranceTable = [0x006B, 0x006C, 0x006D, 0x006E, 0x006F, 0x0070, 0x0071, 0x02CE, 0x02CF, 0x02D0, 0x02D1];
}
exports.chamber_of_sages = chamber_of_sages;
class castle_hedge_maze_day {
    name = "Castle Hedge Maze (Day)";
    id = 69;
    entranceTable = [0x007A, 0x007C, 0x0296, 0x0298];
}
exports.castle_hedge_maze_day = castle_hedge_maze_day;
class castle_hedge_maze_night {
    name = "Castle Hedge Maze (Night)";
    id = 70;
    entranceTable = [0x007B, 0x007D, 0x0297, 0x0299];
}
exports.castle_hedge_maze_night = castle_hedge_maze_night;
class cutscene_map {
    name = "Cutscene Map";
    id = 71;
    entranceTable = [0x00A0, 0x00A1, 0x00A2, 0x00A3, 0x00A4, 0x00A5, 0x00A6, 0x00A7, 0x00A8, 0x00A9, 0x00AA, 0x00AB, 0x00AC, 0x02EF];
}
exports.cutscene_map = cutscene_map;
class dampe_grave_and_windmill {
    name = "Dampe Grave and Windmill (?)";
    id = 72;
    entranceTable = [0x044F, 0x0450, 0x0451, 0x0452, 0x0453, 0x0454, 0x0455, 0x0456, 0x0503, 0x0504, 0x0505, 0x0506];
}
exports.dampe_grave_and_windmill = dampe_grave_and_windmill;
class fishing_pond {
    name = "Fishing Pond";
    id = 73;
    entranceTable = [0x045F, 0x0460, 0x0461, 0x0462];
}
exports.fishing_pond = fishing_pond;
class castle_courtyard {
    name = "Castle Courtyard";
    id = 74;
    entranceTable = [0x0400, 0x0401, 0x0402, 0x0403, 0x0404, 0x0405, 0x0406, 0x05F0, 0x05F1, 0x05F2, 0x05F3];
}
exports.castle_courtyard = castle_courtyard;
class bombchu_bowling_alley {
    name = "Bombchu Bowling Alley";
    id = 75;
    entranceTable = [0x0507, 0x0508, 0x0509, 0x050A];
}
exports.bombchu_bowling_alley = bombchu_bowling_alley;
class ranch_house_and_silo {
    name = "Ranch House and Silo";
    id = 76;
    entranceTable = [0x004F, 0x0050, 0x0051, 0x0052, 0x05D0, 0x05D1, 0x05D2, 0x05D3, 0x05E4, 0x05E5, 0x05E6, 0x05E7];
}
exports.ranch_house_and_silo = ranch_house_and_silo;
class guard_house {
    name = "Guard house";
    id = 77;
    entranceTable = [0x007E, 0x007F, 0x0080, 0x0081];
}
exports.guard_house = guard_house;
class granny_potion_shop {
    name = "Granny Potion Shop";
    id = 78;
    entranceTable = [0x0072, 0x0073, 0x0074, 0x0075];
}
exports.granny_potion_shop = granny_potion_shop;
class ganon_tower_collapse_and_battle_arena {
    name = "Ganon Tower Collapse and Battle Arena";
    id = 79;
    entranceTable = [0x0517, 0x0518, 0x0519, 0x051A, 0x051B];
}
exports.ganon_tower_collapse_and_battle_arena = ganon_tower_collapse_and_battle_arena;
class house_of_skulltula {
    name = "House of Skulltula";
    id = 80;
    entranceTable = [0x0550, 0x0551, 0x0552, 0x0553];
}
exports.house_of_skulltula = house_of_skulltula;
class hyrule_field {
    name = "Hyrule Field";
    id = 81;
    entranceTable = [0x00CD, 0x00CE, 0x00CF, 0x00D0, 0x00D1, 0x00D2, 0x00D3, 0x00D4, 0x00D5, 0x00D6, 0x00D7, 0x00D8, 0x00D9, 0x00DA, 0x017D, 0x017E, 0x017F, 0x0180, 0x0181, 0x0182, 0x0183, 0x0184, 0x0185, 0x0186, 0x0187, 0x0188, 0x0189, 0x018A, 0x018B, 0x018C, 0x018D, 0x018E, 0x018F, 0x0190, 0x01F9, 0x01FA, 0x01FB, 0x01FC, 0x01FD, 0x01FE, 0x01FF, 0x0200, 0x027A, 0x027B, 0x027C, 0x027D, 0x027E, 0x027F, 0x0280, 0x0281, 0x0282, 0x0283, 0x0284, 0x0285, 0x028A, 0x028B, 0x028C, 0x028D, 0x028E, 0x028F, 0x0290, 0x0291, 0x0292, 0x0293, 0x0294, 0x0295, 0x0311, 0x0312, 0x0313, 0x0314, 0x0476, 0x0477, 0x0478, 0x0479, 0x050F, 0x0510, 0x0511, 0x0512, 0x0594, 0x0595, 0x0596, 0x0597];
}
exports.hyrule_field = hyrule_field;
class kakariko_village {
    name = "Kakariko Village";
    id = 82;
    entranceTable = [0x00DB, 0x00DC, 0x00DD, 0x00DE, 0x00DF, 0x00E0, 0x00E1, 0x00E2, 0x00E3, 0x0191, 0x0192, 0x0193, 0x0194, 0x0195, 0x0196, 0x0197, 0x0198, 0x0201, 0x0202, 0x0203, 0x0204, 0x02A6, 0x02A7, 0x02A8, 0x02A9, 0x0345, 0x0346, 0x0347, 0x0348, 0x0349, 0x034A, 0x034B, 0x034C, 0x034D, 0x034E, 0x034F, 0x0350, 0x0351, 0x0352, 0x0353, 0x0354, 0x044B, 0x044C, 0x044D, 0x044E, 0x0463, 0x0464, 0x0465, 0x0466, 0x04FF, 0x0500, 0x0501, 0x0502, 0x0513, 0x0514, 0x0515, 0x0516, 0x0554, 0x0555, 0x0556, 0x0557, 0x05DC, 0x05DD, 0x05DE, 0x05DF];
}
exports.kakariko_village = kakariko_village;
class graveyard {
    name = "Graveyard";
    id = 83;
    entranceTable = [0x00E4, 0x00E5, 0x00E6, 0x00E7, 0x00E8, 0x00E9, 0x0205, 0x0206, 0x0207, 0x0208, 0x0355, 0x0356, 0x0357, 0x0358, 0x0359, 0x035A, 0x035B, 0x035C, 0x035D, 0x035E, 0x035F, 0x0360, 0x0361, 0x0362, 0x0363, 0x0364, 0x050B, 0x050C, 0x050D, 0x050E, 0x0568, 0x0569, 0x056A, 0x056B, 0x0580, 0x0581, 0x0582, 0x0583];
}
exports.graveyard = graveyard;
class zora_river {
    name = "Zora River";
    id = 84;
    entranceTable = [0x00EA, 0x00EB, 0x00EC, 0x00ED, 0x0199, 0x019A, 0x019B, 0x019C, 0x019D, 0x019E, 0x019F, 0x01A0, 0x01D9, 0x01DA, 0x01DB, 0x01DC, 0x01DD, 0x01DE, 0x01DF, 0x01E0];
}
exports.zora_river = zora_river;
class kokiri_forest {
    name = "Kokiri Forest";
    id = 85;
    entranceTable = [0x00EE, 0x00EF, 0x00F0, 0x00F1, 0x00F2, 0x00F3, 0x00F4, 0x00F5, 0x00F6, 0x00F7, 0x00F8, 0x00F9, 0x00FA, 0x00FB, 0x0209, 0x020A, 0x020B, 0x020C, 0x020D, 0x020E, 0x020F, 0x0210, 0x0211, 0x0212, 0x0213, 0x0214, 0x0266, 0x0267, 0x0268, 0x0269, 0x026A, 0x026B, 0x026C, 0x026D, 0x0286, 0x0287, 0x0288, 0x0289, 0x0338, 0x0339, 0x033A, 0x033B, 0x033C, 0x033D, 0x033E, 0x033F, 0x0443, 0x0444, 0x0445, 0x0446, 0x0447, 0x0448, 0x0449, 0x044A, 0x0457, 0x0458, 0x0459, 0x045A, 0x05E8, 0x05E9, 0x05EA, 0x05EB];
}
exports.kokiri_forest = kokiri_forest;
class sacred_forest_meadow {
    name = "Sacred Forest Meadow";
    id = 86;
    entranceTable = [0x00FC, 0x00FD, 0x00FE, 0x00FF, 0x0100, 0x0101, 0x0215, 0x0216, 0x0217, 0x0218, 0x02EE, 0x0600, 0x0601, 0x0602, 0x0603, 0x0608, 0x0609, 0x060A, 0x060B];
}
exports.sacred_forest_meadow = sacred_forest_meadow;
class lake_hylia {
    name = "Lake Hylia";
    id = 87;
    entranceTable = [0x0102, 0x0103, 0x0104, 0x0105, 0x0106, 0x0107, 0x0219, 0x021A, 0x021B, 0x021C, 0x021D, 0x021E, 0x021F, 0x0220, 0x0309, 0x030A, 0x030B, 0x030C, 0x03C8, 0x03C9, 0x03CA, 0x03CB, 0x03CC, 0x03CD, 0x03CE, 0x03CF, 0x04E6, 0x04E7, 0x04E8, 0x04E9, 0x0560, 0x0561, 0x0562, 0x0563, 0x0604, 0x0605, 0x0606, 0x0607, 0x060C, 0x060D, 0x060E, 0x060F];
}
exports.lake_hylia = lake_hylia;
class zora_domain {
    name = "Zora's Domain";
    id = 88;
    entranceTable = [0x0108, 0x0109, 0x010A, 0x010B, 0x010C, 0x010D, 0x0153, 0x0154, 0x0155, 0x0156, 0x01A1, 0x01A2, 0x01A3, 0x01A4, 0x0328, 0x0329, 0x032A, 0x032B, 0x03C4, 0x03C5, 0x03C6, 0x03C7];
}
exports.zora_domain = zora_domain;
class zora_fountain {
    name = "Zora Fountain";
    id = 89;
    entranceTable = [0x010E, 0x010F, 0x0110, 0x0111, 0x0112, 0x0113, 0x0114, 0x0115, 0x0116, 0x0221, 0x0222, 0x0223, 0x0224, 0x0225, 0x0226, 0x0227, 0x0228, 0x0394, 0x0395, 0x0396, 0x0397, 0x03D4, 0x03D5, 0x03D6, 0x03D7, 0x03D8, 0x03D9, 0x03DA, 0x03DB];
}
exports.zora_fountain = zora_fountain;
class gerudo_valley {
    name = "Gerudo Valley";
    id = 90;
    entranceTable = [0x0117, 0x0118, 0x0119, 0x011A, 0x011B, 0x011C, 0x011D, 0x01A5, 0x01A6, 0x01A7, 0x01A8, 0x0229, 0x022A, 0x022B, 0x022C, 0x022D, 0x022E, 0x022F, 0x0230, 0x03D0, 0x03D1, 0x03D2, 0x03D3];
}
exports.gerudo_valley = gerudo_valley;
class lost_woods {
    name = "Lost Wood";
    id = 91;
    entranceTable = [0x011E, 0x011F, 0x0120, 0x0121, 0x0122, 0x01A9, 0x01AA, 0x01AB, 0x01AC, 0x01AD, 0x01AE, 0x01AF, 0x01B0, 0x01B1, 0x01B2, 0x01B3, 0x01B4, 0x04C6, 0x04C7, 0x04C8, 0x04C9, 0x04D2, 0x04D3, 0x04D4, 0x04D5, 0x04D6, 0x04D7, 0x04D8, 0x04D9, 0x04DA, 0x04DB, 0x04DC, 0x04DD, 0x04DE, 0x04DF, 0x04E0, 0x04E1, 0x05E0, 0x05E1, 0x05E2, 0x05E3];
}
exports.lost_woods = lost_woods;
class desert_colossus {
    name = "Desert Colossus";
    id = 92;
    entranceTable = [0x0123, 0x0124, 0x0125, 0x0126, 0x0127, 0x0128, 0x01E1, 0x01E2, 0x01E3, 0x01E4, 0x01E5, 0x01E6, 0x01E7, 0x01E8, 0x01E9, 0x01EA, 0x01EB, 0x01EC, 0x01ED, 0x01EE, 0x01EF, 0x01F0, 0x01F1, 0x01F2, 0x01F3, 0x01F4, 0x01F5, 0x01F6, 0x01F7, 0x01F8, 0x057C, 0x057D, 0x057E, 0x057F, 0x0610, 0x0611, 0x0612, 0x0613];
}
exports.desert_colossus = desert_colossus;
class gerudo_fortress {
    name = "Gerudo Fortress";
    id = 93;
    entranceTable = [0x0129, 0x012A, 0x012B, 0x012C, 0x012D, 0x012E, 0x012F, 0x0231, 0x0232, 0x0233, 0x0234, 0x0235, 0x0236, 0x0237, 0x0238, 0x0239, 0x023A, 0x023B, 0x023C, 0x02AA, 0x02AB, 0x02AC, 0x02AD, 0x02BA, 0x02BB, 0x02BC, 0x02BD, 0x02BE, 0x02BF, 0x02C0, 0x02C1, 0x02C2, 0x02C3, 0x02C4, 0x02C5, 0x02C6, 0x02C7, 0x02C8, 0x02C9, 0x02D2, 0x02D3, 0x02D4, 0x02D5, 0x02D6, 0x02D7, 0x02D8, 0x02D9, 0x02DA, 0x02DB, 0x02DC, 0x02DD, 0x02DE, 0x02DF, 0x02E0, 0x02E1, 0x03A4, 0x03A5, 0x03A6, 0x03A7, 0x03A8, 0x03A9, 0x03AA, 0x03AB, 0x03AC, 0x03AD, 0x03AE, 0x03AF, 0x03B0, 0x03B1, 0x03B2, 0x03B3, 0x03B4, 0x03B5, 0x03B6, 0x03B7, 0x05F8, 0x05F9, 0x05FA, 0x05FB];
}
exports.gerudo_fortress = gerudo_fortress;
class haunted_wasteland {
    name = "Haunted Wasteland";
    id = 94;
    entranceTable = [0x0130, 0x0131, 0x0132, 0x0133, 0x0365, 0x0366, 0x0367, 0x0368, 0x0369, 0x036A, 0x036B, 0x036C];
}
exports.haunted_wasteland = haunted_wasteland;
class hyrule_castle {
    name = "Hyrule Castle";
    id = 95;
    entranceTable = [0x0138, 0x0139, 0x023D, 0x023E, 0x0241, 0x0340, 0x0341, 0x0344, 0x047E, 0x047F, 0x04FA, 0x04FB, 0x04FE];
}
exports.hyrule_castle = hyrule_castle;
class death_mountain_trail {
    name = "Death Mountain Trail";
    id = 96;
    entranceTable = [0x013D, 0x013E, 0x013F, 0x0140, 0x0141, 0x0142, 0x0143, 0x0144, 0x0145, 0x0146, 0x01B9, 0x01BA, 0x01BB, 0x01BC, 0x01BD, 0x01BE, 0x01BF, 0x01C0, 0x0242, 0x0243, 0x0244, 0x0245, 0x045B, 0x045C, 0x045D, 0x045E, 0x047A, 0x047B, 0x047C, 0x047D];
}
exports.death_mountain_trail = death_mountain_trail;
class death_mountain_crater {
    name = "Death Mountain Creater";
    id = 97;
    entranceTable = [0x0147, 0x0148, 0x0149, 0x014A, 0x014B, 0x014C, 0x0246, 0x0247, 0x0248, 0x0249, 0x024A, 0x024B, 0x024C, 0x024D, 0x0482, 0x0483, 0x0484, 0x0485, 0x04F6, 0x04F7, 0x04F8, 0x04F9, 0x0564, 0x0565, 0x0566, 0x0567];
}
exports.death_mountain_crater = death_mountain_crater;
class goron_city {
    name = "Goron City";
    id = 98;
    entranceTable = [0x014D, 0x014E, 0x014F, 0x0150, 0x0151, 0x0152, 0x01C1, 0x01C2, 0x01C3, 0x01C4, 0x03FC, 0x03FD, 0x03FE, 0x03FF, 0x04E2, 0x04E3, 0x04E4, 0x04E5];
}
exports.goron_city = goron_city;
class lon_lon_ranch {
    name = "Lon Lon Ranch";
    id = 99;
    entranceTable = [0x0157, 0x0158, 0x0159, 0x015A, 0x015B, 0x015C, 0x015D, 0x015E, 0x015F, 0x0160, 0x0161, 0x0162, 0x0163, 0x0164, 0x02AE, 0x02AF, 0x02B0, 0x02B1, 0x02E2, 0x02E3, 0x02E4, 0x02E5, 0x02E6, 0x02E7, 0x02E8, 0x02E9, 0x0378, 0x0379, 0x037A, 0x037B, 0x042F, 0x0430, 0x0431, 0x0432, 0x04CA, 0x04CB, 0x04CC, 0x04CD, 0x04CE, 0x04CF, 0x04D0, 0x04D1, 0x0558, 0x0559, 0x055A, 0x055B, 0x055C, 0x055D, 0x055E, 0x055F, 0x05D4, 0x05D5, 0x05D6, 0x05D7];
}
exports.lon_lon_ranch = lon_lon_ranch;
class ganon_castle_exterior {
    name = "Ganon's Castle Exterior";
    id = 100;
    entranceTable = [0x013A, 0x013B, 0x013C, 0x023F, 0x0240, 0x0342, 0x0343, 0x04FC, 0x04FD,]; // CRASHES: 0x0480, 0x0481
}
exports.ganon_castle_exterior = ganon_castle_exterior;
class collision_testing_area {
    name = "Collison Testing Area";
    id = 101;
    entranceTable = [0x0094, 0x0095, 0x0096, 0x0097];
}
exports.collision_testing_area = collision_testing_area;
class Beshitu {
    name = "Beshitu?";
    id = 102;
    entranceTable = [0x0520, 0x0521, 0x0522, 0x0523];
}
exports.Beshitu = Beshitu;
class depth_test {
    name = "Depth Test";
    id = 103;
    entranceTable = [0x00B6];
}
exports.depth_test = depth_test;
class dark_link_testing_area {
    name = "Dark Link Testing Area";
    id = 106;
    entranceTable = [0x0047, 0x0048, 0x0049, 0x004A];
}
exports.dark_link_testing_area = dark_link_testing_area;
class beta_castle_courtyard {
    name = "Beta Castle Courtyard";
    id = 107;
    entranceTable = [0x0076, 0x0077, 0x0078, 0x0079];
}
exports.beta_castle_courtyard = beta_castle_courtyard;
class action_testing_room {
    name = "Action Testing Room";
    id = 108;
    entranceTable = [0x0018, 0x0019, 0x001A, 0x001B];
}
exports.action_testing_room = action_testing_room;
class item_testing_room {
    name = "Item Testing Room";
    id = 109;
    entranceTable = [0x0024, 0x0025, 0x0026, 0x0027];
}
exports.item_testing_room = item_testing_room;
class lost_scene {
    name = "Lost Scene";
    id = 110;
    entranceTable = [0x0014, 0x0015, 0x0016, 0x0017];
}
exports.lost_scene = lost_scene;
exports.Scenes = new Map([
    [SCENES.inside_the_deku_tree, new inside_the_deku_tree()],
    [SCENES.dodongo_cavern, new dodongo_cavern()],
    [SCENES.inside_jabu_jabu_belly, new inside_jabu_jabu_belly()],
    [SCENES.forest_temple, new forest_temple()],
    [SCENES.fire_temple, new fire_temple()],
    [SCENES.water_temple, new water_temple()],
    [SCENES.spirit_temple, new spirit_temple()],
    [SCENES.shadow_temple, new shadow_temple()],
    [SCENES.bottom_of_the_well, new bottom_of_the_well()],
    [SCENES.ice_cavern, new ice_cavern()],
    [SCENES.ganon_tower, new ganon_tower()],
    [SCENES.gerudo_training_ground, new gerudo_training_ground()],
    [SCENES.thieves_hideout, new thieves_hideout()],
    [SCENES.inside_ganon_castle, new inside_ganon_castle()],
    [SCENES.ganon_tower_collapsing, new ganon_tower_collapsing()],
    [SCENES.inside_ganon_castle_collapsing, new inside_ganon_castle_collapsing()],
    [SCENES.treasure_box_shop, new treasure_box_shop()],
    [SCENES.gohma_lair, new gohma_lair()],
    [SCENES.king_dodongo_lair, new king_dodongo_lair()],
    [SCENES.barinade_lair, new barinade_lair()],
    [SCENES.phantom_ganon_lair, new phantom_ganon_lair()],
    [SCENES.volvagia_lair, new volvagia_lair()],
    [SCENES.morpha_lair, new morpha_lair()],
    [SCENES.twinrova_lair_and_nabooru_mini_boss_room, new twinrova_lair_and_nabooru_mini_boss_room()],
    [SCENES.bongo_bongo_lair, new bongo_bongo_lair()],
    [SCENES.ganondorf_lair, new ganondorf_lair()],
    [SCENES.tower_collapse_exterior, new tower_collapse_exterior()],
    [SCENES.market_entrance_child_day, new market_entrance_child_day()],
    [SCENES.market_entrance_child_night, new market_entrance_child_night()],
    [SCENES.market_entrance_child_ruins, new market_entrance_ruins()],
    [SCENES.back_alley_child_day, new back_alley_child_day()],
    [SCENES.back_alley_child_night, new back_alley_child_night()],
    [SCENES.market_child_day, new market_child_day()],
    [SCENES.market_child_night, new market_child_night()],
    [SCENES.market_ruins, new market_ruins()],
    [SCENES.temple_of_time_exterior_child_day, new temple_of_time_exterior_child_day()],
    [SCENES.temple_of_time_exterior_child_night, new temple_of_time_exterior_child_night()],
    [SCENES.temple_of_time_exterior_ruins, new temple_of_time_exterior_ruins()],
    [SCENES.know_it_all_brothers_house, new know_it_all_brothers_house()],
    [SCENES.house_of_twins, new house_of_twins()],
    [SCENES.mido_house, new mido_house()],
    [SCENES.saria_house, new saria_house()],
    [SCENES.carpenter_boss_house, new carpenter_boss_house()],
    [SCENES.back_alley_house_man_in_green, new back_alley_house_man_in_green()],
    [SCENES.bazaar, new bazaar()],
    [SCENES.kokiri_shop, new kokiri_shop()],
    [SCENES.goron_shop, new goron_shop()],
    [SCENES.zora_shop, new zora_shop()],
    [SCENES.kakariko_potion_shop, new kakariko_potion_shop()],
    [SCENES.market_potion_shop, new market_potion_shop()],
    [SCENES.bombchu_shop, new bombchu_shop()],
    [SCENES.happy_mask_shop, new happy_mask_shop()],
    [SCENES.link_house, new link_house()],
    [SCENES.back_alley_house_dog_lady, new back_alley_house_dog_lady()],
    [SCENES.stable, new stable()],
    [SCENES.impa_house, new impa_house()],
    [SCENES.lakeside_laboratory, new lakeside_laboratory()],
    [SCENES.carpenters_tent, new carpenters_tent()],
    [SCENES.gravekeeper_hut, new gravekeeper_hut()],
    [SCENES.great_fairy_fountain_upgrades, new great_fairy_fountain_upgrades()],
    [SCENES.fairy_fountain, new fairy_fountain()],
    [SCENES.great_fairy_fountain_spells, new great_fairy_fountain_spells()],
    [SCENES.grottos, new grottos()],
    [SCENES.grave_redead, new grave_redead()],
    [SCENES.grave_fairy_fountain, new grave_fairy_fountain()],
    [SCENES.royal_family_tomb, new royal_family_tomb()],
    [SCENES.shooting_gallery, new shooting_gallery()],
    [SCENES.temple_of_time, new temple_of_time()],
    [SCENES.chamber_of_sages, new chamber_of_sages()],
    [SCENES.castle_hedge_maze_day, new castle_hedge_maze_day()],
    [SCENES.castle_hedge_maze_night, new castle_hedge_maze_night()],
    [SCENES.cutscene_map, new cutscene_map()],
    [SCENES.dampe_grave_and_windmill, new dampe_grave_and_windmill()],
    [SCENES.fishing_pond, new fishing_pond()],
    [SCENES.castle_courtyard, new castle_courtyard()],
    [SCENES.bombchu_bowling_alley, new bombchu_bowling_alley()],
    [SCENES.ranch_house_and_silo, new ranch_house_and_silo()],
    [SCENES.guard_house, new guard_house()],
    [SCENES.granny_potion_shop, new granny_potion_shop()],
    [SCENES.ganon_tower_collapse_and_battle_arena, new ganon_tower_collapse_and_battle_arena()],
    [SCENES.house_of_skulltula, new house_of_skulltula()],
    [SCENES.hyrule_field, new hyrule_field()],
    [SCENES.kakariko_village, new kakariko_village()],
    [SCENES.graveyard, new graveyard()],
    [SCENES.zora_river, new zora_river()],
    [SCENES.kokiri_forest, new kokiri_forest()],
    [SCENES.sacred_forest_meadow, new sacred_forest_meadow()],
    [SCENES.lake_hylia, new lake_hylia()],
    [SCENES.zora_domain, new zora_domain()],
    [SCENES.zora_fountain, new zora_fountain()],
    [SCENES.gerudo_valley, new gerudo_valley()],
    [SCENES.lost_woods, new lost_woods()],
    [SCENES.desert_colossus, new desert_colossus()],
    [SCENES.gerudo_fortress, new gerudo_fortress()],
    [SCENES.haunted_wasteland, new haunted_wasteland()],
    [SCENES.hyrule_castle, new hyrule_castle()],
    [SCENES.death_mountain_trail, new death_mountain_trail()],
    [SCENES.death_mountain_crater, new death_mountain_crater()],
    [SCENES.goron_city, new goron_city()],
    [SCENES.lon_lon_ranch, new lon_lon_ranch()],
    [SCENES.ganon_castle_exterior, new ganon_castle_exterior()],
    [SCENES.collision_testing_area, new collision_testing_area()],
    [SCENES.dark_link_testing_area, new dark_link_testing_area()],
    [SCENES.beta_castle_courtyard, new beta_castle_courtyard()],
    [SCENES.action_testing_room, new action_testing_room()],
    [SCENES.item_testing_room, new item_testing_room()],
    [SCENES.lost_scene, new lost_scene()]
]);
//# sourceMappingURL=OoTSceneEnum.js.map