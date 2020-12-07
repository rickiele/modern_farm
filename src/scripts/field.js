// Empty array to store all of plants growing in the field
let plantsArray = [];

// Function which adds the seed to the field
export const addPlant = (seed) => {

  if (Array.isArray(seed) === true) {
    plantsArray.push(seed);
  
  } else {
    plantsArray.push(seed);
  }
};

// Function which returns copy of the array of plants
export const usePlants = () => {
  return plantsArray.slice();
};


