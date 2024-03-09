// Adds custom Paxels using the PaxelJS Mod: https://modrinth.com/mod/paxeljs
// This uses the variables in the "tools.js" file.

// Ensure PaxelJS is installed
if (Platform.mods.paxeljs != undefined) {
  StartupEvents.registry("item", (event) => {
    for (const mat of global.materials) {
      event
        .create(`${mat}_paxel`, "paxel")
        .texture("layer0", "kubejs:item/axe_handle")
        .texture("layer1", "kubejs:item/paxel")
        .color(1, properties[mat].color)
        .maxDamage(properties[mat].damage)
        .tag("forge:tools/paxels")
        .tag(`forge:tools/paxels/${mat}`)
        .tier(`${properties[mat].tier}`);
    }
  });
}

if(Platform.mods.cucumberjs != undefined) {
    console.log('[paxels.js]: Heya, CucumberJS is installed! It adds more stuff from Cucumber, including Paxels. Use that instead of PaxelJS!')
}