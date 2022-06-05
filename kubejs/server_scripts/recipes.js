onEvent('recipes', event => {
	event.remove({output: 'projecte:transmutation_table'})







  //projecte Addition
// Example of using extended crafting shaped table
  //   event.recipes.extendedcrafting.shaped_table('projecte:transmutation_table', [
//     'KKKKKKKKK',
//     'KKKKKKKKK',
//     'KKKKKKKKK',
//     'KKKKKKKKK',
//     'KKKKKKKKK',
//     'KKKKKKKKK',
//     'KKKKKKKKK',
//     'KKKNKKKKK',
//     'KKKKKKKKE'
// ], {
//     K: 'projecte:klein_star_ein',
//     N: 'minecraft:netherite_block',
//     E: 'minecraft:dragon_egg'
// })


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
  D:'reliquary:alkahestry_tome',
  E:'pipez:ultimate_upgrade',
  F:'thermal:flux_magnet',
  G:'botania:terra_pick',
  H:'aiotbotania:alfsteel_aiot',
  I:'mekanism:mekasuit_helmet',
  J:'mekanism:mekasuit_bodyarmor',
  K:'mekanism:mekasuit_pants',
  L:'mekanism:mekasuit_boots',
  M:'solarflux:sp_7',
  N:'extendedcrafting:ultimate_singularity',
  O:'industrialforegoing:supreme_black_hole_unit',
  P:'ironfurnaces:million_furnace',
  Q:'compressium:diamond_5',
  R:'castle_in_the_sky:laputa_miniature',
  S:'darkutils:charm_warding',
  T:'aeinfinitybooster:dimension_card',
  U:'beyond_earth:rocket_t4',
  V:'luggage:luggage',
  W:'mna:spectral_elytra',
  X:'botania:magnet_ring_greater',
  Y:'cookingforblockheads:cow_jar',
  Z:'mythicbotany:mana_ring_greatest'
})








  //   //a few misc crafts to make things easier. see I am not fully a masochist
  // event.shapeless('minecraft:flint', [
  //       'SS',
  //       'S'
  //     ], {
  //       S: 'minecraft:gravel'
  //     })
  // event.shapeless(item.of('minecraft:string', 4), [
  //       'S'
  //     ], {
  //       S: '#minecraft:wool'
  //     })
  })