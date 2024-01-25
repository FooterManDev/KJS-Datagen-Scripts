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
        player.server.runCommand(`/summon ${egg.mc_id} ${x} ${y + 1} ${z}`);
    }
});