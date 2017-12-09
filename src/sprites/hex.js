import Phaser from 'phaser';

import Grid from '../map/grid';
import Map from '../map';
import Archaeologist from './archaeologist';
import terrainTypes from '../constants/terrainTypes';
import ForestResource from '../sprites/resources/forest';

const onHexClicked = (clickedHex) => {
  // TODO: EXTRACT ME!
  const { hexInfo, position, type } = clickedHex;
  const { grid } = Grid.instance();

  const Hex = grid.Hex;
  const targetHex = Hex(hexInfo.x, hexInfo.y, hexInfo.z);
  const neighbours = Hex.neighbors(targetHex);

  const archaeologist = Archaeologist.instance();
  const archaeologistHexes = archaeologist.getHexes();

  let validMove = false;

  // TODO: CHECK LATER IF IS FLOATABLE
  if (type !== terrainTypes.WATER) {
    for (let i = 0; i < neighbours.length; i++) {
      const currentNeighbour = neighbours[i];
      const key = `${currentNeighbour.x}${currentNeighbour.y}${currentNeighbour.z}`;

      if (key === archaeologistHexes.currentHex) {
        validMove = true;
        break;
      }
    }
  }

  if (validMove) {
    Map.instance().revealHexes(neighbours);
    archaeologist.setHexes({ currentHex: `${hexInfo.x}${hexInfo.y}${hexInfo.z}` });
    archaeologist.moveUnit({ x: position.x, y: position.y });
  }
};

export default class extends Phaser.Sprite {
  constructor ({game, x, y, type, hexInfo}) {
    let asset = type ? `hex_64_${type}` : 'hex_64';

    super(game, x, y, asset);

    this.inputEnabled = true;
    this.anchor.set(0.5);
    this.events.onInputDown.add(onHexClicked, this);
    this.hexInfo = hexInfo;
    this.type = type;

    this.spawnResource();
  }

  spawnResource() {
    const { game, position } = this;
    game.add.existing(new ForestResource({
      game: game,
      x: position.x,
      y: position.y
    }));
  }
}
