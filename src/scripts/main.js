console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'
import { usePlants } from './field.js'


// // Plan
// createPlan()

// const yearlyPlan = createPlan()
// console.log(createPlan);

// // Corn
// const cornSeed = createCorn()
// console.log(cornSeed);

// // Asparagus
// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed);

// // Potato
// const potatoSeed = createPotato()
// console.log(potatoSeed);

// // Soybean
// const soybeanSeed = createSoybean()
// console.log(soybeanSeed);

// // Sunflower
// const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed);

// // Wheat
// const wheatSeed = createWheat()
// console.log(wheatSeed);

// field.js test
let seed = {};
seed = createSunflower();
const addSunflower = addPlant(seed);
const useSunflower = usePlants();
console.log(addSunflower, useSunflower);

