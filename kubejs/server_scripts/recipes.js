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
  'KKKKKKKKK',
  'KKKKKKKKK',
  'KKKKKKKKK',
  'KKKKKKKKK',
  'KKKKKKKKK',
  'KKKKKKKKK',
  'KKKKKKKKK',
  'KKKNKKKKK',
  'KKKKKKKKE'
], {
  K: 'projecte:klein_star_ein',
  N: 'minecraft:netherite_block',
  E: 'minecraft:dragon_egg'

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