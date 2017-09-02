/* globals __DEV__ */
import Phaser from 'phaser-ce'

import HexMap from '../map';

export default class extends Phaser.State {
  create () {
    const game = this.game;

    const map = new HexMap(game);
    
    map.generateTiles(( game.width / 64 ) * 2, game.height / 64);
  }
}
