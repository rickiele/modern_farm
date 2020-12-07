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
import { plantSeeds } from './tractor.js'


// Plan
createPlan();

const yearlyPlan = createPlan();
console.log(yearlyPlan);

// Seeds
// Corn
const cornSeed = createCorn();
console.log(cornSeed);

// Asparagus
const asparagusSeed = createAsparagus();
console.log(asparagusSeed);

// Potato
const potatoSeed = createPotato();
console.log(potatoSeed);

// Soybean
const soybeanSeed = createSoybean();
console.log(soybeanSeed);

// Sunflower
const sunflowerSeed = createSunflower();
console.log(sunflowerSeed);

// Wheat
const wheatSeed = createWheat();
console.log(wheatSeed);

// field.js test
let seed = {};
addPlant(seed);
const storeValue = usePlants();
console.log(`Array of plants`,storeValue)


// tractor.js test
let plan = createPlan();
plantSeeds(plan);
let usedPlants = usePlants();
console.log(`Use Plants`, usedPlants)