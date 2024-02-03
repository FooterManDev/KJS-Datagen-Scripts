BlockEvents.rightClicked(event => {
    const {player, hand, item, block} = event;
    const {x, y, z} = block.getPos();
    let k = id => `kubejs:${id}`;

    if (hand != 'MAIN_HAND') return;

    // Check if the item is a custom spawn egg
    let egg = global.spawnableMobs.find(egg => k(egg.name.toLowerCase().replace("'", "").split(' ').join('_')) === item.id);

    if (typeof (egg) !== 'undefined') {
        if (!player.isCreative()) {
            item.count--;
        }

        if(typeof egg.nbt == 'undefined') egg.nbt = {}
        //player.server.runCommand(`/summon ${egg.mc_id} ${x} ${y + 1} ${z}`);
                let entity = event.level.createEntity(egg.mc_id)
                entity.x = x + 0.5 //#1 to fix wrong alignment on block.clicking
                entity.y = y + 1
                entity.z = z + 0.5 //#1
                entity.mergeNbt(egg.nbt) //  <- require modify global.spawnableMobs to allow nbt
                entity.spawn()
    }
});
