onEvent('recipes', event => {
  //projecte transmutation table
  event.recipes.extendedcrafting.shaped_table('projecte:transmutation_table', [
    'ABCDEBA',
    'BBFGHBB',
    'BMINKMB',
    'OPQRQSO',
    'BMJTLMB',
    'BBUVWBB',
    'ABXYZBA'
  ], {
    A: 'ae2:spatial_storage_cell_128',
    B: 'extendedcrafting:ender_star',
    C: 'naturesaura:netherite_finder',
    D: 'reliquary:alkahestry_tome',
    E: 'pipez:ultimate_upgrade',
    F: 'mysticalagradditions:creative_essence',
    G: Item.of('botania:terra_pick').ignoreNBT(),
    H: Item.of('aiotbotania:alfsteel_aiot').ignoreNBT(),
    I: Item.of('mekanism:mekasuit_helmet').ignoreNBT(),
    J: Item.of('mekanism:mekasuit_bodyarmor').ignoreNBT(),
    K: Item.of('mekanism:mekasuit_pants').ignoreNBT(),
    L: Item.of('mekanism:mekasuit_boots').ignoreNBT(),
    M: 'solarflux:sp_7',
    N: 'extendedcrafting:ultimate_singularity',
    O: 'industrialforegoing:supreme_black_hole_unit',
    P: 'ironfurnaces:million_furnace',
    Q: 'compressium:diamond_5',
    R: 'castle_in_the_sky:laputa_miniature',
    S: 'create:creative_motor',
    T: 'aeinfinitybooster:dimension_card',
    U: 'beyond_earth:rocket_t4',
    V: 'luggage:luggage',
    W: 'mna:spectral_elytra',
    X: 'botania:magnet_ring_greater',
    Y: 'cookingforblockheads:cow_jar',
    Z: 'mythicbotany:mana_ring_greatest'
  })

//chunkloaders Basic Chunk Loader
event.shaped('chunkloaders:basic_chunk_loader', [
  'WGW',
  'GIG',
  'WGW'
],{
  W: 'thermal:lumium_ingot',
  G: 'quark:dragon_scale',
  I: 'minecraft:dragon_breath'
})


// mystical agriculture
event.recipes.extendedcrafting.shaped_table('mysticalagradditions:creative_essence', [
  "   A   ",
  "  ABA  ",
  " ACDCA ",
  "AECFCEA",
  " ACDCA ",
  "  ABA  ",
  "   A   "
], {
  A: 'mysticalagradditions:insanium_essence',
  B: 'mekanism:pellet_polonium',
  C: 'mysticalagradditions:insanium_ingot',
  D: 'mysticalagradditions:insanium_gemstone_block',
  E: 'mysticalagradditions:insanium_coal',
  F: 'mysticalagriculture:master_infusion_crystal'
})


event.shaped('angelring:itemring', [
  'WGW',
  'NIN',
  'DGD'
],{
  W: 'reliquary:bat_wing',
  G: 'minecraft:gold_block',
  I: 'angelring:itemdiamondring',
  D: 'quark:dragon_scale',
  N: 'minecraft:netherite_block'
})

  //Iron Jetpacks
  //need to figure out the nbt data
  // event.shaped('ironjetpacks:cell', [
  //   ' A ',
  //   'BCB',
  //   ' A '
  // ], {
  //   A: '#forge:storage_blocks/redstone',
  //   B: 'end_of_mine_tweaks:unobtanium_block',
  //   C: 'mekanism:pressurized_reaction_chamber'
  // })
  // event.shaped('ironjetpacks:creative_thruster', [
  //   'ABA',
  //   'BCB',
  //   'ADA'
  // ], {
  //   A: 'end_of_mine_tweaks:unobtanium_block',
  //   B: 'end_of_mine_tweaks:beskar_block',
  //   C: 'ironjetpacks:creative_cell',
  //   D: 'ironfurnaces:unobtainium_furnace'
  // })
  // event.shaped('ironjetpacks:creative_capacitor', [
  //   'ADA',
  //   'BEB',
  //   'CFC'
  // ], {
  //   A: 'create:refined_radiance_casing',
  //   B: 'create:shadow_steel_casing',
  //   C: 'end_of_mine_tweaks:beskar_block',
  //   D: 'industrialforegoing:mycelial_reactor',
  //   E: 'mekanism:ultimate_induction_cell',
  //   F: 'mekanism:pressurized_reaction_chamber'
  // })
  // event.shaped('ironjetpacks:creative_jetpack', [
  //   'ACA',
  //   'BFB',
  //   'DED'
  // ], {
  //   A: 'mysticalagradditions:creative_essence',
  //   B: 'end_of_mine_tweaks:unobtanium_block',
  //   C: 'ironjetpacks:creative_capacitor',
  //   D: 'ironjetpacks:creative_thruster',
  //   E: 'compressium:netherite_9',
  //   F: 'ironjetpacks:unobtainium_jetpack'
  // })


  //Create
  event.recipes.create.mechanical_crafting('create:creative_motor', [
    'ABA',
    'CDC',
    'BEB'
  ], {
    A: 'create:cogwheel',
    B: 'create:large_cogwheel',
    C: 'create:shaft',
    D: 'compressium:netherite_7',
    E: 'create:gearbox'
  })

//Botania
event.recipes.extendedcrafting.shaped_table('botania:creative_pool', [
  "ABCDEFG",
  "HIIJIIK",
  "LIMNMIO",
  "PJNQNJR",
  "SIMNMIT",
  "UIIJIIV",
  "WXYZ123"
], {
  A: 'botania:rune_winter',
  B: 'botania:rune_mana',
  C: 'botania:rune_lust',
  D: 'botania:rune_gluttony',
  E: 'botania:rune_greed',
  F: 'botania:rune_sloth',
  G: "botania:rune_wrath",
  H: "botania:rune_envy",
  I: "extendedcrafting:the_ultimate_ingot",
  J: "botania:fabulous_pool",
  K: "botania:rune_pride",
  L: "mythicbotany:alfheim_rune",
  M: "end_of_mine_tweaks:unobtanium_block",
  N: "extendedcrafting:the_ultimate_component",
  O: "mythicbotany:muspelheim_rune",
  P: "mythicbotany:asgard_rune",
  Q: "extendedcrafting:ultimate_singularity",
  R: "mythicbotany:nidavellir_rune",
  S: "mythicbotany:helheim_rune",
  T: "botania:rune_fire",
  U: "botania:rune_earth",
  V: "botania:rune_air",
  W: "botania:rune_spring",
  X: "botania:rune_summer",
  Y: "botania:rune_autumn",
  Z: "mythicbotany:vanaheim_rune",
  "1": "mythicbotany:niflheim_rune",
  "2": "botania:rune_water",
  "3": "mythicbotany:midgard_rune"
})



//extended crafting
event.recipes.extendedcrafting.shaped_table('extendedcrafting:the_ultimate_ingot', [
  "    A    ",
  "   ABA   ",
  "  CDEFC  ",
  " CGHIJKC ",
  "ALMNONPQA",
  " CRAISTC ",
  "  CUVWC  ",
  "   AXA   ",
  "    A    "
], {
  A: "mysticalagradditions:insanium_ingot",
  B: "extendedcrafting:black_iron_ingot",
  C: "mysticalagradditions:creative_essence",
  D: "tconstruct:amethyst_bronze_ingot",
  E: "silentgear:blaze_gold_ingot",
  F: "extendedcrafting:enhanced_ender_ingot",
  G: "botania:terrasteel_ingot",
  H: "extendedcrafting:crystaltine_ingot",
  I: "mysticalagradditions:insanium_gemstone_block",
  J: "botania:gaia_ingot",
  K: "extendedcrafting:ender_ingot",
  L: "extendedcrafting:crystaltine_catalyst",
  M: "extendedcrafting:ender_star",
  N: "mekanism:pellet_polonium",
  O: "extendedcrafting:ultimate_singularity",
  P: "extendedcrafting:black_iron_ingot",
  Q: "minecraft:netherite_ingot",
  R: "industrialforegoing:pink_slime_ingot",
  S: "mekanism:ingot_refined_obsidian",
  T: "mysticalagriculture:soulium_ingot",
  U: "botania:elementium_ingot",
  V: "extendedcrafting:redstone_ingot",
  W: "biggerreactors:cyanite_ingot",
  X: "extendedcrafting:luminessence"
})

//projecte

event.recipes.extendedcrafting.shaped_table('projecte:watch_of_flowing_time', [
  "  AAA  ",
  " ABCBA ",
  "ABDEDBA",
  "ACFGFCA",
  "ABDEDBA",
  " ABCBA ",
  "  AAA  "
], {
  A: "projecte:dark_matter_block",
  B: "mysticalagradditions:creative_essence",
  C: "extendedcrafting:enhanced_ender_ingot",
  D: "extendedcrafting:ender_star",
  E: "extendedcrafting:the_ultimate_catalyst",
  F: "extendedcrafting:enhanced_ender_ingot",
  G: "botania:terrasteel_ingot"
})





//mekanism

event.recipes.extendedcrafting.shaped_table('mekanism:creative_chemical_tank', [
  "    A    ",
  "   ABA   ",
  "  ABCBA  ",
  "  ACDCA  ",
  "AAADEDAAA",
  "  ACDCA  ",
  "  ABCBA  ",
  "   ABA   ",
  "    A    "
], {
  A: "mekanism:ultimate_chemical_tank",
  B: "mekanism:ultimate_tier_installer",
  C: "mekanism:pellet_polonium",
  D: "extendedcrafting:the_ultimate_ingot",
  E: "extendedcrafting:ultimate_singularity"
})

event.recipes.extendedcrafting.shaped_table('mekanism:creative_fluid_tank', [
  "ABCDEFGHA",
  "AIIJKJIIA",
  "AIJKLKJIA",
  "AJKLMLKJA",
  "AKLNONLKA",
  "AJKLMLKJA",
  "AIJKLKJIA",
  "AIIJKJIIA",
  "APEQRSTUA"
], {
  A: "mekanism:ultimate_fluid_tank",
  B: "materialis:molten_froststeel_bucket",
  C: "tinkers_reforged:molten_shulker_bucket",
  D: "botania:open_bucket",
  E: "mekanismgenerators:deuterium_bucket",
  F: "cyclic:magma_bucket",
  G: "cyclic:xpjuice_bucket",
  H: "industrialforegoing:sludge_bucket",
  I: "mekanism:alloy_reinforced",
  J: "ae2:fluid_storage_cell_256k",
  K: "extendedcrafting:luminessence",
  L: "extendedcrafting:the_ultimate_ingot",
  M: "mysticalagradditions:creative_essence",
  N: "rftoolsbuilder:shape_card_pump",
  O: "extendedcrafting:ultimate_singularity",
  P: "industrialforegoing:latex_bucket",
  Q: "industrialforegoing:meat_bucket",
  R: "thermal:syrup_bucket",
  S: "thermal:resin_bucket",
  T: "pneumaticcraft:oil_bucket",
  U: "industrialforegoing:ether_gas_bucket"
})


event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "ABCDCBA",
    "EFGHGFE",
    "CGIJIGC",
    "DHJKJHD",
    "CGIJIGC",
    "EFGHGFE",
    "ABCDCBA"
  ],
  "key": {
    "A": {
      "item": "mysticalagradditions:creative_essence"
    },
    "B": {
      "item": "mekanism:creative_fluid_tank"
    },
    "C": {
      "item": "mekanism:ultimate_tier_installer"
    },
    "D": {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    "E": {
      "item": "angelring:itemring"
    },
    "F": {
      "item": "extendedcrafting:frame"
    },
    "G": {
      "item": "extendedcrafting:crystaltine_catalyst"
    },
    "H": {
      "item": "industrialforegoing:mycelial_reactor"
    },
    "I": {
      "item": "create:creative_motor"
    },
    "J": {
      "item": "rftoolsdim:dimension_builder"
    },
    "K": {
      "item": "extendedcrafting:ultimate_singularity"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "mekanism:creative_energy_cube",
    "count": 1,
    "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"18446744073709551615.9999\"}]}}"
  }
})



// RFtools dimensions
event.recipes.extendedcrafting.shaped_table('rftoolsdim:dimension_builder', [
  "DDDDD",
  "DFGFD",
  "DABAD",
  "DCECD",
  "DDDDD"

], {
  A: "minecraft:diamond",
  B: "rftoolsbase:machine_frame",
  C: "minecraft:gold_ingot",
  D: "mysticalagradditions:insanium_essence",
  E: "mysticalagradditions:creative_essence",
  F: "minecraft:ender_pearl",
  G: "minecraft:emerald"
})


//Nautures compass
event.shaped('naturescompass:naturescompass', [
  'WGW',
  'GIG',
  'WGW'
],{
  W: '#minecraft:saplings',
  G: 'minecraft:dragon_breath',
  I: 'minecraft:compass'
})


//Explorers compass
event.shaped('explorerscompass:explorerscompass', [
  'WGW',
  'GIG',
  'WGW'
],{
  W: 'minecraft:dragon_breath',
  G: 'minecraft:cracked_stone_bricks',
  I: 'minecraft:compass'
})





event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
      "ABCDE",
      "FGHGI",
      "JKLKJ",
      "MNHNO",
      "PQRST"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:mycelial_ender"
    },
    "B": {
      "item": "industrialforegoing:mycelial_explosive"
    },
    "C": {
      "item": "industrialforegoing:mycelial_halitosis"
    },
    "D": {
      "item": "industrialforegoing:mycelial_magma"
    },
    "E": {
      "item": "industrialforegoing:mycelial_crimed"
    },
    "F": {
      "item": "industrialforegoing:mycelial_netherstar"
    },
    "G": {
      "item": "mekanismgenerators:fusion_reactor_controller"
    },
    "H": {
      "item": "create:creative_motor"
    },
    "I": {
      "item": "industrialforegoing:mycelial_slimey"
    },
    "J": {
      "item": "malum:stained_spirit_resonator"
    },
    "K": {
      "item": "mysticalagradditions:creative_essence"
    },
    "L": {
      "tag": "forge:gears/crystaltine"
    },
    "M": {
      "item": "industrialforegoing:mycelial_disenchantment"
    },
    "N": {
      "item": "mekanismgenerators:fusion_reactor_frame"
    },
    "O": {
      "item": "industrialforegoing:mycelial_rocket"
    },
    "P": {
      "item": "industrialforegoing:mycelial_potion"
    },
    "Q": {
      "item": "industrialforegoing:mycelial_culinary"
    },
    "R": {
      "item": "industrialforegoing:mycelial_furnace"
    },
    "S": {
      "item": "industrialforegoing:mycelial_death"
    },
    "T": {
      "item": "industrialforegoing:mycelial_meatallurgic"
    }
  },
  "result": {
      "item": "industrialforegoing:mycelial_reactor",
      "count": 1
  }
})

//STTORAGE DRAWERS
event.recipes.extendedcrafting.shaped_table('storagedrawers:creative_storage_upgrade', [
  "AAAAA",
  "ABCBA",
  "ACDCA",
  "ABCBA",
  "AAAAA"

], {
  A: "storagedrawers:emerald_storage_upgrade",
  B: "mysticalagradditions:creative_essence",
  C: "end_of_mine_tweaks:instantanium_block",
  D: "extendedcrafting:ultimate_singularity"
})

//PIPEZ
event.recipes.extendedcrafting.shaped_table('pipez:infinity_upgrade', [
  "AAAAA",
  "ABCBA",
  "ACDCA",
  "ABCBA",
  "AAAAA"

], {
  A: "pipez:ultimate_upgrade",
  B: "mysticalagradditions:creative_essence",
  C: "end_of_mine_tweaks:instantanium_block",
  D: "extendedcrafting:ultimate_singularity"
})









  })