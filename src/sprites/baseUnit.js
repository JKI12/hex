import Phaser from 'phaser';

let hexes = {
  currentHex: '000',
  previousHex: undefined
};

export default class BaseUnit extends Phaser.Sprite {
  constructor(game, x, y, asset) {
    super(game, x, y, asset);

    this.anchor.set(0.5);
    this.getHexes = this.getHexes;
    this.setHexes = this.setHexes;
  }

  moveUnit({ x, y }) {
    this.game.add.tween(this).to({ x, y }, 500, null, true);
    this.bringToTop();
  }

  getHexes() {
    return hexes;
  }

  setHexes({ currentHex }) {
    hexes = {
      previousHex: hexes.currentHex,
      currentHex
    }
  }
}
