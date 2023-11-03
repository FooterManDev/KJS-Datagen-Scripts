//Adds storage blocks for all materials you can use with global.ingots
StartupEvents.registry('block', event => {
  for (const mat of global.ingots) {
    event
      .create(`${mat}_block`)
      .textureAll('kubejs:block/storage_block')
      .color(0, ingot_properties[mat].color)
      .tagBoth('forge:storage_blocks')
      .tagBoth(`forge:storage_blocks/${mat}`)
      .requiresTool(true)
      .soundType('metal')
      .item(i => {
        i.color(ingot_properties[mat].color)
      })
  }
})
