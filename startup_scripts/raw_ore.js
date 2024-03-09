//Creates Raw Ore for non-Vanilla and non-Alloy materials.
const raw_ore_properties = {
  tin: { color: tin },
  silver: { color: silver },
  lead: { color: lead },
  nickel: { color: nickel },
  aluminum: { color: aluminum },
  osmium: { color: osmium },
  uranium: { color: uranium },
  zinc: { color: zinc },
};

global.raw_ores = [
  "tin",
  "silver",
  "lead",
  "nickel",
  "aluminum",
  "osmium",
  "uranium",
  "zinc",
];

StartupEvents.registry("item", (event) => {
  for (const mat of global.raw_ores) {
    event
      .create(`raw_${mat}`)
      .texture("layer0", "kubejs:item/raw_ore")
      .color(0, raw_ore_properties[mat].color)
      .tag("forge:raw_materials")
      .tag(`forge:raw_materials/${mat}`);
  }
});
