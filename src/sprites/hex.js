import Phaser from 'phaser';

const onHexClicked = (hex) => {
  console.log(hex);
};

export default class extends Phaser.Sprite {
  constructor ({game, x, y, type, hexInfo}) {
    let asset = type ? `hex_64_${type}` : 'hex_64';
    super(game, x, y, asset);
    this.inputEnabled = true;
    this.anchor.set(0.5);
    this.events.onInputDown.add(onHexClicked, this);
    this.hexInfo = hexInfo;
  }
}
