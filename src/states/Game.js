/* globals __DEV__ */
import Phaser from 'phaser'

import HexMap from '../map';

export default class extends Phaser.State {
  create () {
    const game = this.game;

    const map = new HexMap(game);
    map.generateTiles();
  }
}
