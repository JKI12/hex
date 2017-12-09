/* globals __DEV__ */
import Phaser from 'phaser'

import HexMap from '../map';
import Archaeologist from '../sprites/archaeologist';

export default class extends Phaser.State {
  create () {
    const game = this.game;
    game.physics.startSystem(Phaser.Physics.P2JS);

    const archaeologist = Archaeologist.instance(game, game.world.centerX, game.world.centerY);

    const map = HexMap.instance(game);
    map.generateTiles();

    game.add.existing(archaeologist);
  }
}
