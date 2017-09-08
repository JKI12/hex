'use strict'
import Hex from '../sprites/hex';
import * as terrainTypes from '../constants/terrainTypes';
import Grid from './grid';

const hexSize = {
  width: 52,
  height: 60
}

export default class Map {
  constructor (game) {
    this.game = game;
    this.grid = Grid.instance(hexSize.width / 2 + 5, [-this.game.world.centerX, -this.game.world.centerY]);
  }

  generateTiles() {
    this.hexGroup = this.game.add.group();
    const hexes = this.grid.generate(2);
    this.drawHexes(hexes);
  }

  drawHexes(hexes) {
    const { grid } = this.grid;

    hexes.forEach((hex) => {
      const rng = Math.floor(Math.random() * 2) + 1;

      const result = grid.hexToPoint(hex);
      const h = this.game.add.existing(new Hex({
        game: this.game,
        x: result.x,
        y: result.y,
        type: rng === 1 ? terrainTypes.GRASS : terrainTypes.WATER,
        hexInfo: hex
      }));

      this.hexGroup.add(h);
    }, this);
  }
}
