//Makes Dirty Dust, Clumps, Shards, Crystals and Slurries for all materials that come from Ore.
const mek_processing_properties = {
  copper: { color: copper },
  iron: { color: iron },
  gold: { color: tin },
  tin: { color: tin },
  silver: { color: silver },
  lead: { color: lead },
  nickel: { color: nickel },
  aluminum: { color: aluminum },
  osmium: { color: osmium },
  zinc: { color: zinc },
  uranium: { color: uranium }
}

global.mek_processing_ingots = [
  'tin',
  'silver',
  'lead',
  'nickel',
  'aluminum',
  'osmium',
  'zinc',
  'uranium'
]

StartupEvents.registry('item', event => {
  for (const mat of global.mek_processing_ingots) {
    event
      .create(`${mat}_dirty_dust`)
      .displayName(`Dirty ${mat} Dust`)
      .texture('layer0', 'mekanism:item/dirty_dust')
      .color(0, mek_processing_properties[mat].color)
      .tag('mekanism:dirty_dusts')
      .tag(`mekanism:dirty_dusts/${mat}`)
    event
      .create(`${mat}_clump`)
      .texture('layer0', 'mekanism:item/clump')
      .color(0, mek_processing_properties[mat].color)
      .tag('mekanism:clumps')
      .tag(`mekanism:clumps/${mat}`)
    event
      .create(`${mat}_shard`)
      .texture('layer0', 'mekanism:item/shard')
      .color(0, mek_processing_properties[mat].color)
      .tag('mekanism:shards')
      .tag(`mekanism:shards/${mat}`)
    event
      .create(`${mat}_crystal`)
      .texture('layer0', 'mekanism:item/crystal')
      .color(0, mek_processing_properties[mat].color)
      .tag('mekanism:crystals')
      .tag(`mekanism:crystals/${mat}`)
  }
})

StartupEvents.registry('mekanism:slurry', event => {
  for (const mat of global.mek_processing_ingots) {
    event
      .create(`dirty_${mat}`)
      .texture('mekanism:slurry/dirty')
      .color(mek_processing_properties[mat].color)
    event
      .create(`clean_${mat}`)
      .texture('mekanism:slurry/clean')
      .color(mek_processing_properties[mat].color)
  }
})
