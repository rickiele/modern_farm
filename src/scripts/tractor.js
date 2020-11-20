import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'

export const plantSeeds = (plantingPlan) {
  for(let i = 0; i < plantingPlan.length; i++) {
    for(let j = 0; j < plantingPlan.length; j++) {
        if(plantingPlan[i][j] === "Asparagus"){
          createAsparagus();
        } else if {
          createCorn();
        } else if {
          createPotato();
        } else if {
          createSoybean();
        } else if {
          createSunflower();
        } else if {
          createWheat();
        }
      }
  } 
}