//Requires Immersive Engineering. The materials specified are ones that don't already have a Sheetmetal varient.
const metal_properties = {
    tin: {color: tin},
    zinc: {color: zinc},
    osmium: {color: osmium},
    brass: {color: brass},
    bronze: {color: bronze},
    enderium: {color: enderium},
    invar: {color: invar},
    lumium: {color: lumium},
    signalum: {color: signalum},
}

global.sheetmetal_mats = [
    'tin',
    'zinc',
    'osmium',
    'brass',
    'bronze',
    'enderium',
    'invar',
    'lumium',
    'signalum',
]

StartupEvents.registry('block', event => {
    let texture = Platform.mods.immersiveengineering != undefined ?
        'immersiveengineering:block/metal/sheetmetal_aluminum' :
        'kubejs:block/sheetmetal';

    for (const mat of global.sheetmetal_mats) {
        event
            .create(`sheetmetal_${mat}`)
            .displayName(`${mat.charAt(0).toUpperCase() + mat.slice(1)} Sheetmetal`)
            .textureAll(texture)
            .color(0, metal_properties[mat].color)
            .tagBoth('forge:sheetmetals')
            .tagBoth(`forge:sheetmetals/${mat}`)
            .requiresTool(true)
            .soundType('copper')
            .item(i => {
                i.color(metal_properties[mat].color)
            })
    }
})
