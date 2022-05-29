onEvent('recipes', event => {
	event.remove({output: 'projecte:transmutation_table'})

    //projecte Addition
  event.shaped('projecte:transmutation_table', [
        'NPN',
        'SES',
        'NKN'
    ], {
        K: 'projecte:klein_star_ein',
        S: 'extendedcrafting:ender_star',
        N: 'minecraft:netherite_block',
        P: 'solarflux:sp_7',
        E: 'minecraft:dragon_egg'

    })

    //a few misc crafts to make things easier. see I am not fully a masochist
  event.shapeless('minecraft:flint', [
        'SS',
        'S'
      ], {
        S: 'minecraft:gravel'
      })
  event.shapeless(item.of('minecraft:string', 4), [
        'S'
      ], {
        S: '#minecraft:wool'
      })
  })