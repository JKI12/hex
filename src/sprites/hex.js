import Phaser from 'phaser';
import Grid from '../map/grid';

const onHexClicked = (clickedHex) => {
  const { hexInfo } = clickedHex;
  const { grid } = clickedHex.gridInstance;

  const Hex = grid.Hex;
  const targetHex = Hex(hexInfo.x, hexInfo.y, hexInfo.z);
  const neighbours = Hex.neighbors(targetHex);

  console.log(neighbours);
};

export default class extends Phaser.Sprite {
  constructor ({game, x, y, type, hexInfo}) {
    let asset = type ? `hex_64_${type}` : 'hex_64';
    super(game, x, y, asset);
    this.gridInstance = Grid.instance();
    this.inputEnabled = true;
    this.anchor.set(0.5);
    this.events.onInputDown.add(onHexClicked, this);
    this.hexInfo = hexInfo;
  }
}
