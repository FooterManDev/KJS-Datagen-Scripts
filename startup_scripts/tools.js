//Creates Tools for all materials besides ones provided by Minecraft.
const properties = {
  tin: { color: tin, damage: 350, tier: "stone" },
  silver: { color: silver, damage: 400, tier: "diamond" },
  lead: { color: lead, damage: 375, tier: "tier" },
  nickel: { color: nickel, damage: 320, tier: "iron" },
  zinc: { color: zinc, damage: 260, tier: "iron" },
  osmium: { color: osmium, damage: 450, tier: "diamond" },
  copper: { color: copper, damage: 200, tier: "stone" },
  steel: { color: steel, damage: 375, tier: "iron" },
  electrum: { color: electrum, damage: 432, tier: "iron" },
  aluminum: { color: aluminum, damage: 515, tier: "iron" },
  tungsten: { color: tungsten, damage: 780, tier: "netherite" },
  brass: { color: brass, damage: 292, tier: "stone" },
  bronze: { color: bronze, damage: 550, tier: "iron" },
  constantan: { color: constantan, damage: 520, tier: "iron" },
  enderium: { color: enderium, damage: 2183, tier: "netherite" },
  invar: { color: invar, damage: 570, tier: "iron" },
  lumium: { color: lumium, damage: 925, tier: "diamond" },
  signalum: { color: signalum, damage: 700, tier: "diamond" },
  signar: { color: signar, damage: 1000, tier: "netherite" },
};

global.materials = [
  "tin",
  "silver",
  "lead",
  "nickel",
  "zinc",
  "osmium",
  "copper",
  "steel",
  "electrum",
  "aluminum",
  "tungsten",
  "brass",
  "bronze",
  "constantan",
  "enderium",
  "invar",
  "lumium",
  "signalum",
  "signar",
];

StartupEvents.registry("item", (event) => {
  for (const mat of global.materials) {
    event
      .create(`${mat}_axe`, "axe")
      .texture("layer0", "kubejs:item/axe_handle")
      .texture("layer1", "kubejs:item/axe_head")
      .color(1, properties[mat].color)
      .maxDamage(properties[mat].damage)
      .tag("forge:tools/axes")
      .tag(`forge:tools/axes/${mat}`)
      .tier(`${properties[mat].tier}`);
    event
      .create(`${mat}_pickaxe`, "pickaxe")
      .texture("layer0", "kubejs:item/pickaxe_handle")
      .texture("layer1", "kubejs:item/pickaxe_head")
      .color(1, properties[mat].color)
      .maxDamage(properties[mat].damage)
      .tag("forge:tools/pickaxes")
      .tag(`forge:tools/pickaxes/${mat}`)
      .tier(`${properties[mat].tier}`);
    event
      .create(`${mat}_shovel`, "shovel")
      .texture("layer0", "kubejs:item/shovel_handle")
      .texture("layer1", "kubejs:item/shovel_head")
      .color(1, properties[mat].color)
      .maxDamage(properties[mat].damage)
      .tag("forge:tools/shovels")
      .tag(`forge:tools/shovels/${mat}`)
      .tier(`${properties[mat].tier}`);
    event
      .create(`${mat}_hoe`, "hoe")
      .texture("layer0", "kubejs:item/hoe_handle")
      .texture("layer1", "kubejs:item/hoe_head")
      .color(1, properties[mat].color)
      .maxDamage(properties[mat].damage)
      .tag("forge:tools/hoe")
      .tag(`forge:tools/hoe/${mat}`)
      .tier(`${properties[mat].tier}`);
    event
      .create(`${mat}_sword`, "sword")
      .texture("layer0", "kubejs:item/sword_hilt")
      .texture("layer1", "kubejs:item/sword_blade")
      .color(1, properties[mat].color)
      .maxDamage(properties[mat].damage)
      .tag("forge:tools/swords")
      .tag(`forge:tools/swords/${mat}`)
      .tier(`${properties[mat].tier}`);
  }
});
