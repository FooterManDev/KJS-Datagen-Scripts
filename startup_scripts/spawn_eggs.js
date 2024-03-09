global.spawnableMobs = [
  {
    name: "Chicken Spawn Egg",
    mc_id: "minecraft:chicken",
    color_1: 0xa1a1a1,
    color_2: 0xff0000,
  },
  {
    name: "Cow Spawn Egg",
    mc_id: "minecraft:cow",
    color_1: 0x443626,
    color_2: 0xa1a1a1,
  },
  {
    name: "Pig Spawn Egg",
    mc_id: "minecraft:pig",
    color_1: 0xf0a5a2,
    color_2: 0xdb635f,
  },
  {
    name: "Rabbit Spawn Egg",
    mc_id: "minecraft:rabbit",
    color_1: 0x995f40,
    color_2: 0x734831,
  },
  {
    name: "Sheep Spawn Egg",
    mc_id: "minecraft:sheep",
    color_1: 0xe7e7e7,
    color_2: 0xffb5b5,
  },
];

StartupEvents.registry("item", (event) => {
  let spawn_egg = (name, c1, c2) => {
    let id = name.toLowerCase().replace("'", "").split(" ").join("_");
    event
      .create(id)
      .color(0, c1)
      .color(1, c2)
      .parentModel("kubejs:item/spawn_egg")
      .texture("kubejs:item/spawn_egg_0")
      .displayName(name)
      .tooltip("Doesn't work on Spawners!");
  };

  // Spawn Eggs (https://minecraft.wiki/w/Spawn_Egg_colors)
  global.spawnableMobs.forEach((egg) => {
    spawn_egg(egg.name, egg.color_1, egg.color_2);
  });
});
