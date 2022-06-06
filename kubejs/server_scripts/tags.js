onEvent('tags.items', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('forge:ingots/allthemodium', 'end_of_mine_tweaks:instantanium_ingot')
    event.add('forge:ingots/vibranium', 'end_of_mine_tweaks:beskar_ingot')
    event.add('forge:ingots/unobtainium', 'end_of_mine_tweaks:unobtanium_ingot')
  })