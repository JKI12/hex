const types = {
  WATER: 'water',
  GRASS: 'grass',
  DESSERT: 'dessert',
  SNOW: 'snow'
};

export function getRandomType() {
  const keys = Object.keys(types);
  let rng = Math.floor(Math.random() * keys.length - 1) + 1;

  switch (keys[rng]) {
    case 'WATER':
      const shouldChange = (random(3, 1)) === 1;

      if (shouldChange) {
        rng = Math.floor(Math.random() * keys.length - 1) + 1;
      }
      break;
    default:
      break;
  }

  return types[keys[rng]];
}

function random(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export default types;
