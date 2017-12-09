'use strict'
import Hex from '../sprites/hex';
import * as terrainTypes from '../constants/terrainTypes';
import Grid from './grid';

let instance;

const hexSize = {
  width: 52,
  height: 60
}

const mapHexes = [];

export default class Map {
  constructor (game) {
    this.game = game;
    this.grid = Grid.instance(hexSize.width / 2 + 5, [-this.game.world.centerX, -this.game.world.centerY]);
  }

  static instance(game) {
    if (!instance) {
      instance = new Map(game);
    }

    return instance;
  }

  generateTiles() {
    this.hexGroup = this.game.add.group();
    const hexes = this.grid.generate(2);
    this.drawHexes(hexes);
  }

  drawHexes(hexes) {
    hexes.forEach((hex) => {
      const rng = Math.floor(Math.random() * 2) + 1;
      const h = this.drawHex(hex, rng === 1 ? terrainTypes.default.GRASS : terrainTypes.default.DESSERT);
      this.hexGroup.add(h);
    }, this);
  }

  drawHex(hex, type) {
    const { grid } = this.grid;

    const result = grid.hexToPoint(hex);
    const h = this.game.add.existing(new Hex({
      game: this.game,
      x: result.x,
      y: result.y,
      type,
      hexInfo: hex
    }));

    mapHexes.push(`${hex.x}${hex.y}${hex.z}`);

    return h;
  }

  revealHexes(neighbours) {
    for (let i = 0; i < neighbours.length; i++) {
      const neighbour = neighbours[i];
      const key = `${neighbour.x}${neighbour.y}${neighbour.z}`;
      const hexRevealed = mapHexes.indexOf(key) !== -1;

      if (!hexRevealed) {
        this.drawHex(neighbour, terrainTypes.getRandomType());
      }
    }
  }
}
