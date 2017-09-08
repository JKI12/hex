import { Grid } from 'honeycomb-grid';

let instance;

export default class HexGrid {
  constructor(size, origin) {
    this.grid = Grid({
      size,
      origin
    });

    this.generate = (radius) => {
      return this.grid.hexagon({
        radius
      });
    }
  }

  static instance(size, origin) {
    if(!instance) {
      instance = new HexGrid(size, origin);
    }

    return instance;
  }
}