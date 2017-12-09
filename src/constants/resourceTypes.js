const types = {
  FOREST: 'forest'
};

export function getRandomType() {
  const keys = Object.keys(types);
  let rng = Math.floor(Math.random() * keys.length - 1) + 1;
  return types[keys[rng]];
}

export default types;
