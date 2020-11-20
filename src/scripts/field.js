let fieldArray = [];

export const addPlant = (seed) => {

  if (Array.isArray(seed) === true) {
    fieldArray.push(seed);
  
  } else {
    fieldArray.push(seed);
  }
};

export const usePlants = () => {
  return fieldArray.slice();
};


