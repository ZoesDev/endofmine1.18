onEvent('chest.loot_tables', event => {

    // End City Treasure Chest Injection
    event.modify('minecraft:end_city_treasure', table => {
      // Applied Energistics Inscriber Presses for end cities.
      table.addPool(pool => {
        // One random press per end city chest, guaranteed.
        pool.rolls = 1;
        pool.addItem('ae2:calculation_processor_press');
        pool.addItem('ae2:engineering_processor_press');
        pool.addItem('ae2:logic_processor_press');
        pool.addItem('ae2:silicon_press');
      });
    });
  
  });