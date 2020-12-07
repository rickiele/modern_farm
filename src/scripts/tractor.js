// import { createAsparagus } from "./seeds/asparagus"

import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { addPlant } from './field.js'


export const plantSeeds = (plantingPlan) => {
  for (let i = 0; i < plantingPlan.length; i++) {
    for (const toBePlanted of plantingPlan[i]) {
    // Switch and case
      let seed;
      switch (toBePlanted) {
        // Add one or more case statements. Each case statement will be compared to the value of the variable with something.
        case 'Asparagus':
          // Add statement
          seed = createAsparagus();
          break;
        case 'Corn':
          seed = createCorn();
          break;
        case 'Potato':
          seed = createPotato();
          break;
        case 'Soybean':
          seed = createSoybean();
          break;
        case 'Sunflower':
          seed = createSunflower();
          break;
        case 'Wheat':
          seed = createWheat();
        }

        addPlant(seed);
     }
  }
}