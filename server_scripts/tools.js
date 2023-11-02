//Creates Tool Recipes for tools made with KubeJS, using KubeJS ingots.
ServerEvents.recipes(r => {
  let k = id => `kubejs:${id}`

  for (const mat of global.materials) {
    r.shaped(`kubejs:${mat}_axe`, ['aa ', 'ab ', ' b '], {
      a: k(`${mat}_ingot`),
      b: 'minecraft:stick'
    })
    r.shaped(`kubejs:${mat}_pickaxe`, ['aaa', ' b ', ' b '], {
      a: k(`${mat}_ingot`),
      b: 'minecraft:stick'
    })
    r.shaped(`kubejs:${mat}_hoe`, ['aa ', ' b ', ' b '], {
      a: k(`${mat}_ingot`),
      b: 'minecraft:stick'
    })
    r.shaped(`kubejs:${mat}_shovel`, [' a ', ' b ', ' b '], {
      a: k(`${mat}_ingot`),
      b: 'minecraft:stick'
    })
    r.shaped(`kubejs:${mat}_sword`, [' a ', ' a ', ' b '], {
      a: k(`${mat}_ingot`),
      b: 'minecraft:stick'
    })
  }
})
