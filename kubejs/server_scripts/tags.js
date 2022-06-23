onEvent('tags.items', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('forge:ingots/allthemodium', 'end_of_mine_tweaks:instantanium_ingot')
    event.add('forge:ingots/vibranium', 'end_of_mine_tweaks:beskar_ingot')
    event.add('forge:ingots/unobtainium', 'end_of_mine_tweaks:unobtanium_ingot')
    event.add('misctags:farmland/tier6', ['mysticalagradditions:insanium_farmland'])
    event.add('misctags:farmland/tier5', ['mysticalagriculture:supremium_farmland', '#misctags:farmland/tier6'])
    event.add('misctags:farmland/tier4', ['mysticalagriculture:imperium_farmland', '#misctags:farmland/tier5'])
    event.add('misctags:farmland/tier3', ['mysticalagriculture:tertium_farmland', '#misctags:farmland/tier4'])
    event.add('misctags:farmland/tier2', ['mysticalagriculture:prudentium_farmland', '#misctags:farmland/tier3'])
    event.add('misctags:farmland/tier1', ['mysticalagriculture:inferium_farmland', '#misctags:farmland/tier2'])
  })