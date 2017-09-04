'use strict'
import { Grid } from 'honeycomb-grid';
import Hex from '../sprites/hex';
import * as terrainTypes from '../constants/terrainTypes';

const hexSize = {
  width: 52,
  height: 60
}

class Map {
  constructor (game) {
    this.game = game;
  }

  generateTiles () {
    const hexGroup = this.game.add.group();

    const grid = Grid({
      size: hexSize.width / 2 + 5,
      origin: [-this.game.world.centerX, -this.game.world.centerY]
    });

    const hexes = grid.hexagon({
      radius: 2
    });

    hexes.forEach((hex) => {
      const rng = Math.floor(Math.random() * 2) + 1;

      const result = grid.hexToPoint(hex);
      const h = this.game.add.existing(new Hex({
        game: this.game,
        x: result.x,
        y: result.y,
        type: rng === 1 ? terrainTypes.GRASS : terrainTypes.WATER
      }));
      hexGroup.add(h);
    }, this);
  }
}

module.exports = Map;
