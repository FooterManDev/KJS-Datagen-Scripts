//Creates Storage Block Recipes using KubeJS ingots / Nuggets
ServerEvents.recipes(r => {
    let k = id => `kubejs:${id}`;
    function nuggetsToIngot(material) {
        r.shaped(k(`${material}_ingot`), [
            'MMM',
            'MMM',
            'MMM'
        ], {
            M: k(`${material}_nugget`)
        }).id(k(`${material}_nuggets_to_${material}_ingot`));
    }

    function ingotToNuggets(material) {
        r.shapeless(Item.of(k(`${material}_nugget`), 9), Item.of(k(`${material}_ingot`)))
            .id(k(`${material}_ingot_to_${material}_nuggets`));
    }

    function ingotsToBlock(material) {
        r.shaped(k(`${material}_block`), [
            'MMM',
            'MMM',
            'MMM'
        ], {
            M: k(`${material}_ingot`)
        }).id(k(`${material}_ingots_to_${material}_block`));
    }

    function blockToIngots(material) {
        r.shapeless(Item.of(k(`${material}_ingot`, 9)), Item.of(k(`${material}_block`)))
            .id(k(`${material}_block_to_${material}_ingots`));
    }

    for (const mat of global.ingots) {
        ingotsToBlock(mat);
        blockToIngots(mat);
        nuggetsToIngot(mat);
        ingotToNuggets(mat);
    }
})
