import Phaser from 'phaser';

export default class BaseResource extends Phaser.Sprite {
  constructor(game, x, y, asset) {
    super(game, x, y, asset);

    this.anchor.set(0.5);
  }
}
