let maDisabledSeeds = ['apatite', 'ruby', 'sapphire', 'basalz', 'blazing_crystal', 'blitz', 'blizz', 'constantan', 'chrome', 'electrum', 'elementium', 'ender_biotite', 'energized_steel', 'fluix', 'hop_graphite', 'iridium', 'manasteel', 'niotic_crystal', 'nitro_crystal', 'refined_glowstone', 'rock_crystal', 'signalum', 'sky_stone', 'spirited_crystal', 'starmetal', 'sulfur', 'terrasteel', 'titanium', 'tungsten', 'mithril', 'tinkers_bronze', 'ironwood', 'steeleaf', 'pig_iron', 'slimesteel', 'rose_gold', 'queens_slime', 'manyullyn', 'fiery_ingot', 'knightmetal', 'hepatizon', 'lumium', 'enderium','quartz_enriched_iron']

onEvent('recipes', e => {
    function cloche(output, amount, seed, soil, render, time) {
      e.custom({
          type: "immersiveengineering:cloche",
          results: [
            {
              item: output,
              count: amount
            }
          ],
          input: Ingredient.of(seed),
          soil: Ingredient.of(soil),
          time: time,
          render: {
            type: "crop",
            block: render
          }
        }).id(`kubejs:cloche/${seed.replace(':', '/')}`)
    }
  
    function insolator(output, input, id) {
      e.custom({
        "type": "thermal:insolator",
        "ingredient": input,
        "result": output
      }).id(id)
    }
  
    //#region FUNCTIONS
    function tier(types, time, soil, rCount) {
      types.forEach(type => {
        cloche(`mysticalagriculture:${type}_essence`, rCount, `mysticalagriculture:${type}_seeds`, soil, `mysticalagriculture:${type}_crop`, time);
        insolator([Item.of(`mysticalagriculture:${type}_essence`),Item.of( `mysticalagriculture:${type}_seeds`)], Item.of(`mysticalagriculture:${type}_seeds`),`kubejs:thermal/insolator_${type}_seeds`)
      })
    }
  
    function regular(output, amount, seed, crop) {
      cloche(output, amount, seed, 'minecraft:dirt', crop, 600);
    }
  
    function essenceCircle(result, essenceType) {
      e.shaped(result, ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${essenceType}_essence` }).id(`kubejs:mysticalagriculture/${essenceType}_essence_crafting`)
    }


  
    //#region CROPS
    //Tier 1 Crops
    tier([
      'inferium',
      'air',
      'earth',
      'fire',
      'water',
      'dirt',
      'wood',
      'ice',
      'stone',
      'deepslate',
    ], 1000, '#misctags:farmland/tier1', 2)
    //Tier 2 Crops
    tier([
      'aluminum',
      'chicken',
      'coal',
      'copper',
      'coral',
      'cow',
      'dye',
      'fish',
      'honey',
      'nature',
      'nether',
      'pig',
      'saltpeter',
      'sheep',
      'slime',
      'squid',
      'turtle',
      'amethyst',
      'silicon',
      'sulfur',
      'mystical_flower',
      'limestone',
      'menril',
      'rubber',
      'silicon'
    ], 1750, '#misctags:farmland/tier2', 2)
    //Tier 3 Crops
    tier([
      'certus_quartz',
      'creeper',
      'glowstone',
      'iron',
      'lead',
      'nether_quartz',
      'obsidian',
      'prismarine',
      'rabbit',
      'redstone',
      'silver',
      'skeleton',
      'spider',
      'tin',
      'zinc',
      'zombie',
      'crimson_iron',
      'azure_silver',
      'brass',
      'bronze',
      'graphite'
    ], 2500, '#misctags:farmland/tier3', 2)
    //Tier 4 Crops
    tier([
      'blaze',
      'end',
      'enderman',
      'experience',
      'ghast',
      'gold',
      'lapis_lazuli',
      'nickel',
      'osmium',
      'uranium',
      'fluorite',
      'cobalt',
      'steel',
      'compressed_iron',
      'invar',
      'refined_obsidian'
    ], 3250, '#misctags:farmland/tier4', 2)
    //Tier 5 Crops
    tier([
      'diamond',
      'emerald',
      'netherite',
      'wither_skeleton',
      'platinum',
    ], 4000, '#misctags:farmland/tier5', 2)
    //Tier 6 Crops
    tier(['nether_star'], 4750, 'mysticalagradditions:nether_star_crux', 2)
    tier(['dragon_egg'], 4750, 'mysticalagradditions:dragon_egg_crux', 2)
    //Magical Tier
    tier([
      'allthemodium',
      'vibranium',
      'unobtainium'
    ], 5500, 'kubejs:magical_soil', 2)
  
    //Regular crops
    regular('silentgear:flax_fiber', 2, 'silentgear:flax_seeds', 'silentgear:flax_plant');
  })
  