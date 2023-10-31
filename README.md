# Welcome!


I imagine you're tired of making a ton of blocks/items one at a time, making a bulky and hard to read JS script. Well, FooterMan has you covered!

This Repo holds a bunch of scripts related to generating a bunch of blocks and items using `for` loops. No license for the scripts, use at your free will.

#### How to use:

* There are two folders, `server` and `startup` Inside the `server` folder are scripts that __only work in the `server_scripts` folder in KubeJS__. Likewise for `startup`, those go in the `startup_scripts` folder.

* The `constants.js` file has colors defined for some materials. There you can add your own, modify or remove the existing materials.
* In each `startup` datagen file, is a `var` used to get the colors of materials from `constants.js`. There is another `var` below with the names of the materials. **You will need to add a material to both `vars`, otherwise it will not work**.
* Below that, is the main part. You will see a `for` loop, with the datagen code inside it. Add / modfy what you want your item / block to have / not have. For example, if it's a block, you can add your own tags, sounds, etc. Do note, the textures used for these scripts can come from another mod, or custom textures made by me.

* For the `server` scripts, there will be recipes for whatever is made. For example, theres a script that makes a bunch of datagenerated Tools, using a `for` loop. Make your recipes how you want. I will not provide recipes for everything, you can use the Tools script as a base.

* I have provided some textures you may use. They are licenced under [**`CC BY-SA 4.0`**](https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1).
