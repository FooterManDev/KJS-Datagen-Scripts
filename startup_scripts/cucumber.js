/*
 *  Adds tools from CucumberJS. Includes Paxels, Scythes, Shears and Sickles.
 *  CucumberJS also includes Fishing Rods, Watering Cans, and Crossbows.
 *  The assets here are all provided by CucumberJS (As of 0.0.4).
 * 
 *  This uses variables from the tools.js file.
 */

if (Platform.mods.cucumberjs != undefined) {
  StartupEvents.registry("item", (event) => {
    for (const mat of global.materials) {
      event
        .create(`${mat}_paxel`, "paxel")
        .texture("layer0", "cucumberjs:item/axe_handle")
        .texture("layer1", "cucumberjs:item/paxel")
        .color(1, properties[mat].color)
        .maxDamage(properties[mat].damage)
        .tag("forge:tools/paxels")
        .tag(`forge:tools/paxels/${mat}`)
        .tier(`${properties[mat].tier}`);
      event
        .create(`${mat}_scythe`, "scythe")
        .texture("layer0", "cucumberjs:item/scythe_handle")
        .texture("layer1", "cucumberjs:item/scythe_head")
        .color(1, properties[mat].color)
        .maxDamage(properties[mat].damage)
        .tag("forge:tools/paxels")
        .tag(`forge:tools/paxels/${mat}`)
        .tier(`${properties[mat].tier}`);
      event
        .create(`${mat}_shears`, "shears")
        .texture("layer0", "cucumberjs:item/shears_handle")
        .texture("layer1", "cucumberjs:item/shears_main_vanilla")
        .color(1, properties[mat].color)
        .maxDamage(properties[mat].damage)
        .tag("forge:tools/paxels")
        .tag(`forge:tools/paxels/${mat}`);
      event
        .create(`${mat}_sickle`, "sickle")
        .texture("layer0", "cucumberjs:item/sickle_handle")
        .texture("layer1", "cucumberjs:item/sickle_head")
        .color(1, properties[mat].color)
        .maxDamage(properties[mat].damage)
        .tag("forge:tools/paxels")
        .tag(`forge:tools/paxels/${mat}`)
        .tier(`${properties[mat].tier}`);
    }
  });
}
