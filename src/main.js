import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import GameState from './states/Game'

class Game extends Phaser.Game {
  constructor () {
    super({
      width: 1280,
      height: 720,
      parent: 'content',
      renderer: Phaser.Auto
    });

    this.state.add('Boot', BootState, false)
    this.state.add('Game', GameState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
