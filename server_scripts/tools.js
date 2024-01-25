//Creates Tool Recipes for tools made with KubeJS, using KubeJS ingots.
ServerEvents.recipes(r => {
    let k = id => `kubejs:${id}`;

    for (const mat of global.materials) {
        let ingot = mat == 'copper' ? 'minecraft:copper_ingot' : k(`${mat}_ingot`);
        r.shaped(`kubejs:${mat}_axe`, ['aa ', 'ab ', ' b '], {
            a: ingot,
            b: 'minecraft:stick'
        });
        r.shaped(`kubejs:${mat}_pickaxe`, ['aaa', ' b ', ' b '], {
            a: ingot,
            b: 'minecraft:stick'
        });
        r.shaped(`kubejs:${mat}_hoe`, ['aa ', ' b ', ' b '], {
            a: ingot,
            b: 'minecraft:stick'
        });
        r.shaped(`kubejs:${mat}_shovel`, [' a ', ' b ', ' b '], {
            a: ingot,
            b: 'minecraft:stick'
        });
        r.shaped(`kubejs:${mat}_sword`, [' a ', ' a ', ' b '], {
            a: ingot,
            b: 'minecraft:stick'
        });
    }
})
