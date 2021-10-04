export enum SCENES {
    inside_the_deku_tree,
    dodongo_cavern,
    inside_jabu_jabu_belly,
    forest_temple,
    fire_temple,
    water_temple,
    spirit_temple,
    shadow_temple,
    bottom_of_the_well,
    ice_cavern,
    ganon_tower,
    gerudo_training_ground,
    thieves_hideout,
    inside_ganon_castle,
    ganon_tower_collapsing,
    inside_ganon_castle_collapsing,
    treasure_box_shop,
    gohma_lair,
    king_dodongo_lair,
    barinade_lair,
    phantom_ganon_lair,
    volvagia_lair,
    morpha_lair,
    twinrova_lair_and_nabooru_mini_boss_room,
    bongo_bongo_lair,
    ganondorf_lair,
    tower_collapse_exterior,
    market_entrance_child_day,
    market_entrance_child_night,
    market_entrance_child_ruins,
    back_alley_child_day,
    back_alley_child_night,
    market_child_day,
    market_child_night,
    market_ruins,
    temple_of_time_exterior_child_day,
    temple_of_time_exterior_child_night,
    temple_of_time_exterior_ruins,
    know_it_all_brothers_house,
    house_of_twins,
    mido_house,
    saria_house,
    carpenter_boss_house,
    back_alley_house_man_in_green,
    bazaar,
    kokiri_shop,
    goron_shop,
    zora_shop,
    kakariko_potion_shop,
    market_potion_shop,
    bombchu_shop,
    happy_mask_shop,
    link_house,
    back_alley_house_dog_lady,
    stable,
    impa_house,
    lakeside_laboratory,
    carpenters_tent,
    gravekeeper_hut,
    great_fairy_fountain_upgrades,
    fairy_fountain,
    great_fairy_fountain_spells,
    grottos,
    grave_redead,
    grave_fairy_fountain,
    royal_family_tomb,
    shooting_gallery,
    temple_of_time,
    chamber_of_sages,
    castle_hedge_maze_day,
    castle_hedge_maze_night,
    cutscene_map,
    dampe_grave_and_windmill,
    fishing_pond,
    castle_courtyard,
    bombchu_bowling_alley,
    ranch_house_and_silo,
    guard_house,
    granny_potion_shop,
    ganon_tower_collapse_and_battle_arena,
    house_of_skulltula,
    hyrule_field,
    kakariko_village,
    graveyard,
    zora_river,
    kokiri_forest,
    sacred_forest_meadow,
    lake_hylia,
    zora_domain,
    zora_fountain,
    gerudo_valley,
    lost_woods,
    desert_colossus,
    gerudo_fortress,
    haunted_wasteland,
    hyrule_castle,
    death_mountain_trail,
    death_mountain_crater,
    goron_city,
    lon_lon_ranch,
    ganon_castle_exterior,
    collision_testing_area,
    Beshitu,
    depth_test = 103,
    dark_link_testing_area = 106,
    beta_castle_courtyard,
    action_testing_room = 108,
    item_testing_room,
    lost_scene
}

export interface ISceneEnum {
    name: string
    id: number
    entranceTable: Array<number>
}

export class inside_the_deku_tree implements ISceneEnum {
    name = "Inside Deku Tree";
    id = 0;
    entranceTable = [0x0000, 0x0001, 0x0002, 0x0003, 0x0252, 0x0253, 0x0254, 0x0255];
}

export class dodongo_cavern implements ISceneEnum {
    name = "Dodongo Caverns";
    id = 1;
    entranceTable = [0x0004, 0x0005, 0x0006, 0x0007, 0x00C5, 0x00C6, 0x00C7, 0x00C8];
}

export class inside_jabu_jabu_belly implements ISceneEnum {
    name = "JabuJabus Belly";
    id = 2;
    entranceTable = [0x0028, 0x0029, 0x002A, 0x002B, 0x002C, 0x0301, 0x0302, 0x0303, 0x0304, 0x0407, 0x0408, 0x0409, 0x040A];
}

export class forest_temple implements ISceneEnum {
    name = "Forest Temple";
    id = 3;
    entranceTable = [0x0169, 0x016A, 0x016B, 0x016C, 0x024E, 0x024F, 0x0250, 0x0251, 0x0584, 0x0585, 0x0586, 0x0587];
}

export class fire_temple implements ISceneEnum {
    name = "Fire Temple";
    id = 4;
    entranceTable = [0x0165, 0x0166, 0x0167, 0x0168, 0x0175, 0x0176, 0x0177, 0x0178];
}

export class water_temple implements ISceneEnum {
    name = "Water Temple";
    id = 5;
    entranceTable = [0x0010, 0x0011, 0x0012, 0x0013, 0x0423, 0x0424, 0x0425, 0x0426];
}

export class spirit_temple implements ISceneEnum {
    name = "Spirit Temple";
    id = 6;
    entranceTable = [0x0082, 0x0083, 0x0084, 0x0085, 0x0086, 0x0087, 0x02F5, 0x02F6, 0x02F7, 0x02F8, 0x03F0, 0x03F1, 0x03F2, 0x03F3, 0x03F4, 0x03F5, 0x03F6, 0x03F7]; //CRASHES:  0x03F8, 0x03F9, 0x03FA, 0x03FB
}

export class shadow_temple implements ISceneEnum {
    name = "Shadow Temple";
    id = 7;
    entranceTable = [0x0037, 0x0038, 0x0039, 0x003A, 0x02B2, 0x02B3, 0x02B4, 0x02B5, 0x02B6, 0x02B7, 0x02B8, 0x02B9, 0x04EA, 0x04EB, 0x04EC, 0x04ED, 0x04EE, 0x04EF, 0x04F0, 0x04F1];
}

export class bottom_of_the_well implements ISceneEnum {
    name = "Bottom of the Well";
    id = 8;
    entranceTable = [0x0098, 0x0099, 0x009A, 0x009B, 0x05CC, 0x05CD, 0x05CE, 0x05CF];
}

export class ice_cavern implements ISceneEnum {
    name = "Ice Caverns";
    id = 9;
    entranceTable = [0x0088, 0x0089, 0x008A, 0x008B, 0x008C, 0x05D8, 0x05D9, 0x05DA, 0x05DB];
}

export class ganon_tower implements ISceneEnum {
    name = "Ganon's Tower";
    id = 10;
    entranceTable = [0x0200,0x041B, 0x041C, 0x041D, 0x041E, 0x0427, 0x0428, 0x0429, 0x042A, 0x042B, 0x042C, 0x042D, 0x042E];
}

export class gerudo_training_ground implements ISceneEnum {
    name = "Gerudo Training Grounds";
    id = 11;
    entranceTable = [0x0008, 0x0009, 0x000A, 0x000B];
}

export class thieves_hideout implements ISceneEnum {
    name = "Thieves Hideout";
    id = 12;
    entranceTable = [0x0486, 0x0487, 0x0488, 0x0489, 0x048A, 0x048B, 0x048C, 0x048D, 0x048E, 0x048F, 0x0490, 0x0491, 0x0492, 0x0493, 0x0494, 0x0495, 0x0496, 0x0497, 0x0498, 0x0499, 0x049A, 0x049B, 0x049C, 0x049D, 0x049E, 0x049F, 0x04A0, 0x04A1, 0x04A2, 0x04A3, 0x04A4, 0x04A5, 0x04A6, 0x04A7, 0x04A8, 0x04A9, 0x04AA, 0x04AB, 0x04AC, 0x04AD, 0x04AE, 0x04AF, 0x04B0, 0x04B1, 0x04B2, 0x04B3, 0x04B4, 0x04B5, 0x0570, 0x0571, 0x0572, 0x0573];
}

export class inside_ganon_castle implements ISceneEnum {
    name = "Ganon's Castle";
    id = 13;
    entranceTable = [0x0467, 0x0468, 0x0469, 0x046A, 0x046B, 0x046C, 0x046D, 0x046E, 0x046F, 0x0470, 0x0471, 0x0534, 0x0535, 0x0536, 0x0537, 0x0538, 0x0539, 0x053A, 0x053B, 0x053C, 0x053D, 0x053E, 0x053F, 0x0540, 0x0541, 0x0542, 0x0543, 0x0544, 0x0545, 0x0546, 0x0547, 0x0548, 0x0549, 0x054A, 0x054B, 0x054C, 0x054D, 0x054E, 0x054]; 
}

export class ganon_tower_collapsing implements ISceneEnum {
    name = "Ganon's Tower Collapse Exterior";
    id = 14;
    entranceTable = [0x01C9, 0x01CA, 0x01CB, 0x01CC, 0x032C, 0x032D, 0x032E, 0x032F, 0x0330, 0x0331, 0x0332, 0x0333, 0x0334, 0x0335, 0x0336, 0x0337, 0x04BA, 0x04BB, 0x04BC, 0x04BD];
}

export class inside_ganon_castle_collapsing implements ISceneEnum { // ???
    name = "Ganon's Tower Collapse Interior";
    id = 15;
    entranceTable = [0x0134, 0x0135, 0x0136, 0x0137, 0x001C, 0x001D, 0x001E, 0x001F, 0x0020, 0x0021, 0x0022, 0x0023, 0x0179, 0x017A, 0x017B, 0x017C, 0x01B5, 0x01B6, 0x01B7, 0x01B8, 0x0256, 0x0257, 0x04B6, 0x04B7, 0x04B8, 0x04B9, 0x056C, 0x056D, 0x056E, 0x056F];
}

export class treasure_box_shop implements ISceneEnum {
    name = "Tresure Box Shop";
    id = 16;
    entranceTable = [0x0063, 0x0064, 0x0065, 0x0066];
}

export class gohma_lair implements ISceneEnum { 
    name = "Gohma's Lair";
    id = 17;
    entranceTable = [0x040F, 0x0410, 0x0411, 0x0412];
}

export class king_dodongo_lair implements ISceneEnum {
    name = "King Dodongo's Liar";
    id = 18;
    entranceTable = [0x040B, 0x040C, 0x040D, 0x040E];
}

export class barinade_lair implements ISceneEnum {
    name = "Barinade's Lair";
    id = 19;
    entranceTable = [];
}

export class phantom_ganon_lair implements ISceneEnum {
    name = "Phantom Ganon's Lair";
    id = 20;
    entranceTable = [0x000C, 0x000D, 0x000E, 0x000F];
}

export class volvagia_lair implements ISceneEnum {
    name = "Volvagia's Lair";
    id = 21;
    entranceTable = [0x0305, 0x0306, 0x0307, 0x0308];
}

export class morpha_lair implements ISceneEnum {
    name = "Morpha's Liar";
    id = 22;
    entranceTable = [0x0417, 0x0418, 0x0419, 0x041A];
}

export class twinrova_lair_and_nabooru_mini_boss_room implements ISceneEnum {
    name = "Twinrova's Liar and Naboorus Mini Boss Room";
    id = 23;
    entranceTable = [0x008D, 0x008E, 0x008F, 0x0090, 0x0091, 0x0092, 0x0093, 0x05EC, 0x05ED, 0x05EE, 0x05EF];
}

export class bongo_bongo_lair implements ISceneEnum {
    name = "Bongo Bongo's Liar";
    id = 24;
    entranceTable = [0x0413, 0x0414, 0x0415, 0x0416];
}

export class ganondorf_lair implements ISceneEnum {
    name = "Ganondorf's Liar";
    id = 25;
    entranceTable = [0x041F, 0x0420, 0x0421, 0x0422];
}

export class tower_collapse_exterior implements ISceneEnum {
    name = "Tower Collaps Exterior";
    id = 26;
    entranceTable = [0x043F, 0x0440, 0x0441, 0x0442, 0x051C, 0x051D, 0x051E, 0x051F, 0x0524, 0x0525, 0x0526, 0x0527];
}

export class market_entrance_child_day implements ISceneEnum {
    name = "Market Entrance (Child Day)";
    id = 27;
    entranceTable = [0x0033];
}

export class market_entrance_child_night implements ISceneEnum {
    name = "Market Entrance (Child Night)";
    id = 28;
    entranceTable = [0x0034];
}

export class market_entrance_ruins implements ISceneEnum {
    name = "Market Entrance (Ruins)";
    id = 29;
    entranceTable = [0x0035, 0x0036];
}

export class back_alley_child_day implements ISceneEnum {
    name = "Back Alley (Child Day)";
    id = 30;
    entranceTable = [0x0067, 0x0069, 0x00AD, 0x00AF, 0x029A, 0x029C, 0x038C, 0x038E, 0x03C0, 0x03C2];
}

export class back_alley_child_night implements ISceneEnum {
    name = "Back Alley (Child Night)";
    id = 31;
    entranceTable = [0x0068, 0x006A, 0x00AE, 0x00B0, 0x029B, 0x029D, 0x038D, 0x038F, 0x03C1, 0x03C3];
}

export class market_child_day implements ISceneEnum {
    name = "Market (Child Day)";
    id = 32;
    entranceTable = [0x00B1, 0x00B5, 0x01CD, 0x01D1, 0x01D5, 0x025A, 0x025E, 0x0262, 0x026E, 0x0276, 0x029E, 0x02A2, 0x03B8, 0x03BC];
}

export class market_child_night implements ISceneEnum {
    name = "Market (Child Night)";
    id = 33;
    entranceTable = [0x00B2, 0x01CE, 0x01D2, 0x01D6, 0x025B, 0x025F, 0x0263, 0x026F, 0x0277, 0x029F, 0x02A3, 0x03B9, 0x03BD];
}

export class market_ruins implements ISceneEnum {
    name = "Market (Ruins)";
    id = 34;
    entranceTable = [0x00B3, 0x00B4, 0x01CF, 0x01D0, 0x01CF, 0x001CF, 0x01D0, 0x01D3, 0x01D4, 0x01D7, 0x01D8, 0x025C, 0x025D, 0x0260, 0x0261, 0x0264, 0x0265, 0x0270, 0x0271, 0x0278, 0x0279, 0x02A0, 0x02A1, 0x02A4, 0x02A5, 0x03BA, 0x03BB, 0x03BE, 0x03BF];
}

export class temple_of_time_exterior_child_day implements ISceneEnum { 
    name = "Temple of Time Exterior (Child Day)";
    id = 35;
    entranceTable = [0x0171, 0x0472];
}

export class temple_of_time_exterior_child_night implements ISceneEnum {
    name = "Temple of Time Exterior (Child Night)";
    id = 36;
    entranceTable = [0x0172, 0x0473];
}

export class temple_of_time_exterior_ruins implements ISceneEnum {
    name = "Temple of Time Exterior (Ruins)";
    id = 37;
    entranceTable = [0x0173, 0x0174, 0x0474, 0x0475];
}

export class know_it_all_brothers_house implements ISceneEnum {
    name = "Know-It-All Brother's House";
    id = 38;
    entranceTable = [0x00C9, 0x00CA, 0x00CB, 0x00CC];
}

export class house_of_twins implements ISceneEnum {
    name = "House of Twins";
    id = 39;
    entranceTable = [0x009C, 0x009D, 0x009E, 0x009F];
}

export class mido_house implements ISceneEnum {
    name = "Mido's House";
    id = 40;
    entranceTable = [0x0433, 0x0434, 0x0435, 0x0436];
}

export class saria_house implements ISceneEnum { 
    name = "Saria's House";
    id = 41;
    entranceTable = [0x0437, 0x0438, 0x0439, 0x043A];
}

export class carpenter_boss_house implements ISceneEnum {
    name = "Carpenter Boss House";
    id = 42;
    entranceTable = [0x02FD, 0x02FE, 0x02FF, 0x0300];
}

export class back_alley_house_man_in_green implements ISceneEnum {
    name = "BAck Alley House Man in Green";
    id = 43;
    entranceTable = [0x043B, 0x043C, 0x043D, 0x043E];
}

export class bazaar implements ISceneEnum {
    name = "Bazaar";
    id = 44;
    entranceTable = [0x00B7, 0x00B8, 0x00B9, 0x00BA, 0x052C, 0x052D, 0x052E, 0x052F];
}

export class kokiri_shop implements ISceneEnum {
    name = "Kokiri Shop";
    id = 45;
    entranceTable = [0x00C1, 0x00C2, 0x00C3, 0x00C4];
}

export class goron_shop implements ISceneEnum {
    name = "Goron Shop";
    id = 46;
    entranceTable = [0x037C, 0x037D, 0x037E, 0x037F];
}

export class zora_shop implements ISceneEnum {
    name = "Zora Shop";
    id = 47;
    entranceTable = [0x0380, 0x0381, 0x0382, 0x0383];
}

export class kakariko_potion_shop implements ISceneEnum {
    name = "Kakariko Potion Shop";
    id = 48;
    entranceTable = [0x0384, 0x0385, 0x0386, 0x0387, 0x03E8, 0x03E9, 0x03EA, 0x03EB, 0x03EC, 0x03ED, 0x03EE, 0x03EF];
}

export class market_potion_shop implements ISceneEnum {
    name = "Market Potion Shop";
    id = 49;
    entranceTable = [0x0388, 0x0389, 0x038A, 0x038B];
}

export class bombchu_shop implements ISceneEnum {
    name = "Bombchu Shop";
    id = 50;
    entranceTable = [0x0390, 0x0391, 0x0392, 0x0393, 0x0528, 0x0529, 0x052A, 0x052B];
}

export class happy_mask_shop implements ISceneEnum {
    name = "Happy Mask Shop";
    id = 51;
    entranceTable = [0x0530, 0x0531, 0x0532, 0x0533];
}

export class link_house implements ISceneEnum {
    name = "Link's House";
    id = 52;
    entranceTable = [0x00BB, 0x00BC, 0x00BD, 0x00BE, 0x00BF, 0x00C0, 0x0272, 0x0273, 0x0274, 0x0275];
}

export class back_alley_house_dog_lady implements ISceneEnum {
    name = "Back Alley House Dog Lady";
    id = 53;
    entranceTable = [0x0398, 0x0399, 0x039A, 0x039B];
}

export class stable implements ISceneEnum {
    name = "Stable";
    id = 54;
    entranceTable = [0x02F9, 0x02FA, 0x02FB, 0x02FC];
}

export class impa_house implements ISceneEnum {
    name = "Impa's House";
    id = 55;
    entranceTable = [0x039C, 0x039D, 0x039E, 0x039F, 0x05C8, 0x05C9, 0x05CA, 0x05CB];
}

export class lakeside_laboratory implements ISceneEnum {
    name = "Lakeside Laboratory";
    id = 56;
    entranceTable = [0x01C5, 0x01C6, 0x01C7, 0x01C8];
}

export class carpenters_tent implements ISceneEnum {
    name = "Carpenters Tent";
    id = 57;
    entranceTable = [0x03A0, 0x03A1, 0x03A2, 0x03A3];
}

export class gravekeeper_hut implements ISceneEnum {
    name = "Graveyard Hut";
    id = 58;
    entranceTable = [0x030D, 0x030E, 0x030F, 0x0310];
}

export class great_fairy_fountain_upgrades implements ISceneEnum {
    name = "Great Fairy's Fountain (Upgrades)";
    id = 59;
    entranceTable = [0x0315, 0x0316, 0x0317, 0x0318, 0x0319, 0x031A, 0x031B, 0x04BE, 0x04BF, 0x04C0, 0x04C1, 0x04C2, 0x04C3, 0x04C4, 0x04C5, 0x04F2, 0x04F3, 0x04F4, 0x04F5];
}

export class fairy_fountain implements ISceneEnum {
    name = "Fairy Fountain";
    id = 60;
    entranceTable = [0x036D, 0x036E, 0x036F, 0x0370];
}

export class great_fairy_fountain_spells implements ISceneEnum {
    name = "Great Fairy's Fountain (Spells)";
    id = 61;
    entranceTable = [0x0371, 0x0372, 0x0373, 0x0374, 0x0375, 0x0376, 0x0377, 0x0578, 0x0579, 0x057A, 0x057B, 0x0588, 0x0589, 0x058A, 0x058B];
}

export class grottos implements ISceneEnum {
    name = "Grotto";
    id = 62;
    entranceTable = [0x003F, 0x0040, 0x0041, 0x0042, 0x0598, 0x0599, 0x059A, 0x059B, 0x059C, 0x059D, 0x059E, 0x059F, 0x05A0, 0x05A1, 0x05A2, 0x05A3, 0x05A4, 0x05A5, 0x05A6, 0x05A7, 0x05A8, 0x05A9, 0x05AA, 0x05AB, 0x05AC, 0x05AD, 0x05AE, 0x05AF, 0x05B0, 0x05B1, 0x05B2, 0x05B3, 0x05B4, 0x05B5, 0x05B6, 0x05B7, 0x05B8, 0x05B9, 0x05BA, 0x05BB, 0x05BC, 0x05BD, 0x05BE, 0x05BF, 0x05C0, 0x05C1, 0x05C2, 0x05C3, 0x05C4, 0x05C5, 0x05C6, 0x05C7, 0x05FC, 0x05FD, 0x05FE, 0x05FF];
}

export class grave_redead implements ISceneEnum {
    name = "Grave Redead";
    id = 63;
    entranceTable = [0x031C, 0x031D, 0x031E, 0x031F];
}

export class grave_fairy_fountain implements ISceneEnum {
    name = "Grave Fairy Fountain";
    id = 64;
    entranceTable = [0x004B, 0x004C, 0x004D, 0x004E];
}

export class royal_family_tomb implements ISceneEnum {
    name = "Royal Family Tomb";
    id = 65;
    entranceTable = [0x002D, 0x002E, 0x002F, 0x0030, 0x0031, 0x0032, 0x0574, 0x0575, 0x0576, 0x0577];
}

export class shooting_gallery implements ISceneEnum {
    name = "Shooting Gallery";
    id = 66;
    entranceTable = [0x003B, 0x003C, 0x003D, 0x003E, 0x016D, 0x016E, 0x016F, 0x0170, 0x02EA, 0x02EB, 0x02EC, 0x02ED, 0x02F0, 0x02F1, 0x02F2, 0x02F3, 0x02F4];
}

export class temple_of_time implements ISceneEnum {
    name = "Temple of Time";
    id = 67;
    entranceTable = [0x0053, 0x0054, 0x0055, 0x0056, 0x0057, 0x0058, 0x0059, 0x005A, 0x005B, 0x005C, 0x005D, 0x005E, 0x005F, 0x0060, 0x0061, 0x0062, 0x02CA, 0x02CB, 0x02CC, 0x02CD, 0x0320, 0x0321, 0x0322, 0x0323, 0x0324, 0x0325, 0x0326, 0x0327, 0x058C, 0x058D, 0x058E, 0x058F, 0x0590, 0x0591, 0x0592, 0x0593, 0x05F4, 0x05F5, 0x05F6, 0x05F7];
}

export class chamber_of_sages implements ISceneEnum {
    name = "Chamber of Sages";
    id = 68;
    entranceTable = [0x006B, 0x006C, 0x006D, 0x006E, 0x006F, 0x0070, 0x0071, 0x02CE, 0x02CF, 0x02D0, 0x02D1];
}

export class castle_hedge_maze_day implements ISceneEnum {
    name = "Castle Hedge Maze (Day)";
    id = 69;
    entranceTable = [0x007A, 0x007C, 0x0296, 0x0298];
}

export class castle_hedge_maze_night implements ISceneEnum {
    name = "Castle Hedge Maze (Night)";
    id = 70;
    entranceTable = [0x007B, 0x007D, 0x0297, 0x0299];
}

export class cutscene_map implements ISceneEnum {
    name = "Cutscene Map";
    id = 71;
    entranceTable = [0x00A0, 0x00A1, 0x00A2, 0x00A3, 0x00A4, 0x00A5, 0x00A6, 0x00A7, 0x00A8, 0x00A9, 0x00AA, 0x00AB, 0x00AC, 0x02EF];
}

export class dampe_grave_and_windmill implements ISceneEnum { 
    name = "Dampe Grave and Windmill (?)";
    id = 72;
    entranceTable = [0x044F, 0x0450, 0x0451, 0x0452, 0x0453, 0x0454, 0x0455, 0x0456, 0x0503, 0x0504, 0x0505, 0x0506];
}

export class fishing_pond implements ISceneEnum {
    name = "Fishing Pond";
    id = 73;
    entranceTable = [0x045F, 0x0460, 0x0461, 0x0462];
}

export class castle_courtyard implements ISceneEnum {
    name = "Castle Courtyard";
    id = 74;
    entranceTable = [0x0400, 0x0401, 0x0402, 0x0403, 0x0404, 0x0405, 0x0406, 0x05F0, 0x05F1, 0x05F2, 0x05F3];
}

export class bombchu_bowling_alley implements ISceneEnum {
    name = "Bombchu Bowling Alley";
    id = 75;
    entranceTable = [0x0507, 0x0508, 0x0509, 0x050A];
}

export class ranch_house_and_silo implements ISceneEnum {
    name = "Ranch House and Silo";
    id = 76;
    entranceTable = [0x004F, 0x0050, 0x0051, 0x0052, 0x05D0, 0x05D1, 0x05D2, 0x05D3, 0x05E4, 0x05E5, 0x05E6, 0x05E7];
}

export class guard_house implements ISceneEnum {
    name = "Guard house";
    id = 77;
    entranceTable = [0x007E, 0x007F, 0x0080, 0x0081];
}

export class granny_potion_shop implements ISceneEnum {
    name = "Granny Potion Shop";
    id = 78;
    entranceTable = [0x0072, 0x0073, 0x0074, 0x0075];
}

export class ganon_tower_collapse_and_battle_arena implements ISceneEnum {
    name = "Ganon Tower Collapse and Battle Arena";
    id = 79;
    entranceTable = [0x0517, 0x0518, 0x0519, 0x051A, 0x051B];
}

export class house_of_skulltula implements ISceneEnum {
    name = "House of Skulltula";
    id = 80;
    entranceTable = [0x0550, 0x0551, 0x0552, 0x0553];
}

export class hyrule_field implements ISceneEnum {
    name = "Hyrule Field";
    id = 81;
    entranceTable = [0x00CD, 0x00CE, 0x00CF, 0x00D0, 0x00D1, 0x00D2, 0x00D3, 0x00D4, 0x00D5, 0x00D6, 0x00D7, 0x00D8, 0x00D9, 0x00DA, 0x017D, 0x017E, 0x017F, 0x0180, 0x0181, 0x0182, 0x0183, 0x0184, 0x0185, 0x0186, 0x0187, 0x0188, 0x0189, 0x018A, 0x018B, 0x018C, 0x018D, 0x018E, 0x018F, 0x0190, 0x01F9, 0x01FA, 0x01FB, 0x01FC, 0x01FD, 0x01FE, 0x01FF, 0x0200, 0x027A, 0x027B, 0x027C, 0x027D, 0x027E, 0x027F, 0x0280, 0x0281, 0x0282, 0x0283, 0x0284, 0x0285, 0x028A, 0x028B, 0x028C, 0x028D, 0x028E, 0x028F, 0x0290, 0x0291, 0x0292, 0x0293, 0x0294, 0x0295, 0x0311, 0x0312, 0x0313, 0x0314, 0x0476, 0x0477, 0x0478, 0x0479, 0x050F, 0x0510, 0x0511, 0x0512, 0x0594, 0x0595, 0x0596, 0x0597];
}

export class kakariko_village implements ISceneEnum {
    name = "Kakariko Village";
    id = 82;
    entranceTable = [0x00DB, 0x00DC, 0x00DD, 0x00DE, 0x00DF, 0x00E0, 0x00E1, 0x00E2, 0x00E3, 0x0191, 0x0192, 0x0193, 0x0194, 0x0195, 0x0196, 0x0197, 0x0198,0x0201, 0x0202, 0x0203, 0x0204, 0x02A6, 0x02A7, 0x02A8, 0x02A9, 0x0345, 0x0346, 0x0347, 0x0348, 0x0349, 0x034A, 0x034B, 0x034C, 0x034D, 0x034E, 0x034F, 0x0350, 0x0351, 0x0352, 0x0353, 0x0354, 0x044B, 0x044C, 0x044D, 0x044E, 0x0463, 0x0464, 0x0465, 0x0466, 0x04FF, 0x0500, 0x0501, 0x0502, 0x0513, 0x0514, 0x0515, 0x0516, 0x0554, 0x0555, 0x0556, 0x0557, 0x05DC, 0x05DD, 0x05DE, 0x05DF];
}

export class graveyard implements ISceneEnum {
    name = "Graveyard";
    id = 83;
    entranceTable = [0x00E4, 0x00E5, 0x00E6, 0x00E7, 0x00E8, 0x00E9, 0x0205, 0x0206, 0x0207, 0x0208, 0x0355, 0x0356, 0x0357, 0x0358, 0x0359, 0x035A, 0x035B, 0x035C, 0x035D, 0x035E, 0x035F, 0x0360, 0x0361, 0x0362, 0x0363, 0x0364, 0x050B, 0x050C, 0x050D, 0x050E, 0x0568, 0x0569, 0x056A, 0x056B, 0x0580, 0x0581, 0x0582, 0x0583];
}

export class zora_river implements ISceneEnum {
    name = "Zora River";
    id = 84;
    entranceTable = [0x00EA, 0x00EB, 0x00EC, 0x00ED, 0x0199, 0x019A, 0x019B, 0x019C, 0x019D, 0x019E, 0x019F, 0x01A0, 0x01D9, 0x01DA, 0x01DB, 0x01DC, 0x01DD, 0x01DE, 0x01DF, 0x01E0];
}

export class kokiri_forest implements ISceneEnum {
    name = "Kokiri Forest";
    id = 85;
    entranceTable = [0x00EE, 0x00EF, 0x00F0, 0x00F1, 0x00F2, 0x00F3, 0x00F4, 0x00F5, 0x00F6, 0x00F7, 0x00F8, 0x00F9, 0x00FA, 0x00FB,0x0209, 0x020A, 0x020B, 0x020C, 0x020D, 0x020E, 0x020F, 0x0210, 0x0211, 0x0212, 0x0213, 0x0214, 0x0266, 0x0267, 0x0268, 0x0269, 0x026A, 0x026B, 0x026C, 0x026D, 0x0286, 0x0287, 0x0288, 0x0289, 0x0338, 0x0339, 0x033A, 0x033B, 0x033C, 0x033D, 0x033E, 0x033F, 0x0443, 0x0444, 0x0445, 0x0446, 0x0447, 0x0448, 0x0449, 0x044A, 0x0457, 0x0458, 0x0459, 0x045A, 0x05E8, 0x05E9, 0x05EA, 0x05EB];
}

export class sacred_forest_meadow implements ISceneEnum {
    name = "Sacred Forest Meadow";
    id = 86;
    entranceTable = [0x00FC, 0x00FD, 0x00FE, 0x00FF, 0x0100, 0x0101, 0x0215, 0x0216, 0x0217, 0x0218, 0x02EE, 0x0600, 0x0601, 0x0602, 0x0603, 0x0608, 0x0609, 0x060A, 0x060B];
}

export class lake_hylia implements ISceneEnum {
    name = "Lake Hylia";
    id = 87;
    entranceTable = [0x0102, 0x0103, 0x0104, 0x0105, 0x0106, 0x0107, 0x0219, 0x021A, 0x021B, 0x021C, 0x021D, 0x021E, 0x021F, 0x0220, 0x0309, 0x030A, 0x030B, 0x030C, 0x03C8, 0x03C9, 0x03CA, 0x03CB, 0x03CC, 0x03CD, 0x03CE, 0x03CF, 0x04E6, 0x04E7, 0x04E8, 0x04E9, 0x0560, 0x0561, 0x0562, 0x0563, 0x0604, 0x0605, 0x0606, 0x0607, 0x060C, 0x060D, 0x060E, 0x060F];
}

export class zora_domain implements ISceneEnum {
    name = "Zora's Domain";
    id = 88;
    entranceTable = [0x0108, 0x0109, 0x010A, 0x010B, 0x010C, 0x010D, 0x0153, 0x0154, 0x0155, 0x0156, 0x01A1, 0x01A2, 0x01A3, 0x01A4, 0x0328, 0x0329, 0x032A, 0x032B, 0x03C4, 0x03C5, 0x03C6, 0x03C7];
}

export class zora_fountain implements ISceneEnum {
    name = "Zora Fountain";
    id = 89;
    entranceTable = [0x010E, 0x010F, 0x0110, 0x0111, 0x0112, 0x0113, 0x0114, 0x0115, 0x0116, 0x0221, 0x0222, 0x0223, 0x0224, 0x0225, 0x0226, 0x0227, 0x0228, 0x0394, 0x0395, 0x0396, 0x0397, 0x03D4, 0x03D5, 0x03D6, 0x03D7, 0x03D8, 0x03D9, 0x03DA, 0x03DB];
}

export class gerudo_valley implements ISceneEnum {
    name = "Gerudo Valley";
    id = 90;
    entranceTable = [0x0117, 0x0118, 0x0119, 0x011A, 0x011B, 0x011C, 0x011D, 0x01A5, 0x01A6, 0x01A7, 0x01A8, 0x0229, 0x022A, 0x022B, 0x022C, 0x022D, 0x022E, 0x022F, 0x0230, 0x03D0, 0x03D1, 0x03D2, 0x03D3];
}

export class lost_woods implements ISceneEnum {
    name = "Lost Wood";
    id = 91;
    entranceTable = [0x011E, 0x011F, 0x0120, 0x0121, 0x0122, 0x01A9, 0x01AA, 0x01AB, 0x01AC, 0x01AD, 0x01AE, 0x01AF, 0x01B0, 0x01B1, 0x01B2, 0x01B3, 0x01B4, 0x04C6, 0x04C7, 0x04C8, 0x04C9, 0x04D2, 0x04D3, 0x04D4, 0x04D5, 0x04D6, 0x04D7, 0x04D8, 0x04D9, 0x04DA, 0x04DB, 0x04DC, 0x04DD, 0x04DE, 0x04DF, 0x04E0, 0x04E1, 0x05E0, 0x05E1, 0x05E2, 0x05E3];
}

export class desert_colossus implements ISceneEnum {
    name = "Desert Colossus";
    id = 92;
    entranceTable = [0x0123, 0x0124, 0x0125, 0x0126, 0x0127, 0x0128, 0x01E1, 0x01E2, 0x01E3, 0x01E4, 0x01E5, 0x01E6, 0x01E7, 0x01E8, 0x01E9, 0x01EA, 0x01EB, 0x01EC, 0x01ED, 0x01EE, 0x01EF, 0x01F0, 0x01F1, 0x01F2, 0x01F3, 0x01F4, 0x01F5, 0x01F6, 0x01F7, 0x01F8, 0x057C, 0x057D, 0x057E, 0x057F, 0x0610, 0x0611, 0x0612, 0x0613];
}

export class gerudo_fortress implements ISceneEnum {
    name = "Gerudo Fortress";
    id = 93;
    entranceTable = [0x0129, 0x012A, 0x012B, 0x012C, 0x012D, 0x012E, 0x012F, 0x0231, 0x0232, 0x0233, 0x0234, 0x0235, 0x0236, 0x0237, 0x0238, 0x0239, 0x023A, 0x023B, 0x023C, 0x02AA, 0x02AB, 0x02AC, 0x02AD, 0x02BA, 0x02BB, 0x02BC, 0x02BD, 0x02BE, 0x02BF, 0x02C0, 0x02C1, 0x02C2, 0x02C3, 0x02C4, 0x02C5, 0x02C6, 0x02C7, 0x02C8, 0x02C9, 0x02D2, 0x02D3, 0x02D4, 0x02D5, 0x02D6, 0x02D7, 0x02D8, 0x02D9, 0x02DA, 0x02DB, 0x02DC, 0x02DD, 0x02DE, 0x02DF, 0x02E0, 0x02E1, 0x03A4, 0x03A5, 0x03A6, 0x03A7, 0x03A8, 0x03A9, 0x03AA, 0x03AB, 0x03AC, 0x03AD, 0x03AE, 0x03AF, 0x03B0, 0x03B1, 0x03B2, 0x03B3, 0x03B4, 0x03B5, 0x03B6, 0x03B7, 0x05F8, 0x05F9, 0x05FA, 0x05FB];
}

export class haunted_wasteland implements ISceneEnum {
    name = "Haunted Wasteland";
    id = 94;
    entranceTable = [0x0130, 0x0131, 0x0132, 0x0133, 0x0365, 0x0366, 0x0367, 0x0368, 0x0369, 0x036A, 0x036B, 0x036C];
}

export class hyrule_castle implements ISceneEnum {
    name = "Hyrule Castle";
    id = 95;
    entranceTable = [0x0138, 0x0139, 0x023D, 0x023E, 0x0241, 0x0340, 0x0341, 0x0344, 0x047E, 0x047F, 0x04FA, 0x04FB, 0x04FE];
}

export class death_mountain_trail implements ISceneEnum {
    name = "Death Mountain Trail";
    id = 96;
    entranceTable = [0x013D, 0x013E, 0x013F, 0x0140, 0x0141, 0x0142, 0x0143, 0x0144, 0x0145, 0x0146, 0x01B9, 0x01BA, 0x01BB, 0x01BC, 0x01BD, 0x01BE, 0x01BF, 0x01C0, 0x0242, 0x0243, 0x0244, 0x0245, 0x045B, 0x045C, 0x045D, 0x045E, 0x047A, 0x047B, 0x047C, 0x047D];
}

export class death_mountain_crater implements ISceneEnum {
    name = "Death Mountain Creater";
    id = 97;
    entranceTable = [0x0147, 0x0148, 0x0149, 0x014A, 0x014B, 0x014C, 0x0246, 0x0247, 0x0248, 0x0249, 0x024A, 0x024B, 0x024C, 0x024D, 0x0482, 0x0483, 0x0484, 0x0485, 0x04F6, 0x04F7, 0x04F8, 0x04F9, 0x0564, 0x0565, 0x0566, 0x0567];
}

export class goron_city implements ISceneEnum {
    name = "Goron City";
    id = 98;
    entranceTable = [0x014D, 0x014E, 0x014F, 0x0150, 0x0151, 0x0152, 0x01C1, 0x01C2, 0x01C3, 0x01C4, 0x03FC, 0x03FD, 0x03FE, 0x03FF, 0x04E2, 0x04E3, 0x04E4, 0x04E5];
}

export class lon_lon_ranch implements ISceneEnum {
    name = "Lon Lon Ranch";
    id = 99;
    entranceTable = [0x0157, 0x0158, 0x0159, 0x015A, 0x015B, 0x015C, 0x015D, 0x015E, 0x015F, 0x0160, 0x0161, 0x0162, 0x0163, 0x0164, 0x02AE, 0x02AF, 0x02B0, 0x02B1, 0x02E2, 0x02E3, 0x02E4, 0x02E5, 0x02E6, 0x02E7, 0x02E8, 0x02E9, 0x0378, 0x0379, 0x037A, 0x037B, 0x042F, 0x0430, 0x0431, 0x0432, 0x04CA, 0x04CB, 0x04CC, 0x04CD, 0x04CE, 0x04CF, 0x04D0, 0x04D1, 0x0558, 0x0559, 0x055A, 0x055B, 0x055C, 0x055D, 0x055E, 0x055F, 0x05D4, 0x05D5, 0x05D6, 0x05D7];
}

export class ganon_castle_exterior implements ISceneEnum { 
    name = "Ganon's Castle Exterior";
    id = 100;
    entranceTable = [0x013A, 0x013B, 0x013C, 0x023F, 0x0240, 0x0342, 0x0343, 0x04FC, 0x04FD, ]; // CRASHES: 0x0480, 0x0481
}

export class collision_testing_area implements ISceneEnum {
    name = "Collison Testing Area";
    id = 101;
    entranceTable = [0x0094, 0x0095, 0x0096, 0x0097];
}

export class Beshitu implements ISceneEnum {
    name = "Beshitu?";
    id = 102;
    entranceTable = [0x0520, 0x0521, 0x0522, 0x0523];
}

export class depth_test implements ISceneEnum {
    name = "Depth Test";
    id = 103;
    entranceTable = [0x00B6];
}

export class dark_link_testing_area implements ISceneEnum {
    name = "Dark Link Testing Area";
    id = 106;
    entranceTable = [0x0047, 0x0048, 0x0049, 0x004A];
}

export class beta_castle_courtyard implements ISceneEnum {
    name = "Beta Castle Courtyard";
    id = 107;
    entranceTable = [0x0076, 0x0077, 0x0078, 0x0079];
}

export class action_testing_room implements ISceneEnum {
    name = "Action Testing Room";
    id = 108;
    entranceTable = [0x0018, 0x0019, 0x001A, 0x001B];
}

export class item_testing_room implements ISceneEnum {
    name = "Item Testing Room";
    id = 109;
    entranceTable = [0x0024, 0x0025, 0x0026, 0x0027];
}

export class lost_scene implements ISceneEnum {
    name = "Lost Scene";
    id = 110;
    entranceTable = [0x0014, 0x0015, 0x0016, 0x0017];
}



export let Scenes: Map<SCENES, ISceneEnum> = new Map([
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
])

