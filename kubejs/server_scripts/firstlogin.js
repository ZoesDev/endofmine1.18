onEvent('player.logged_in', event => {
	// Check if player doesn't have "starting_items" stage yet
	if (!event.player.stages.has('starting_items')) {
	  // Add the stage
	  event.player.stages.add('starting_items')
	  // Give some items to player
	  event.player.give('minecraft:stone_sword')
	  event.player.give(Item.of('minecraft:stone_pickaxe', "{Damage: 10}"))
	  event.player.give('30x minecraft:apple')
	}
  })