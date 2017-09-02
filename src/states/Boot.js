import Phaser from 'phaser'

export default class extends Phaser.State {
  preload () {
    const game = this.game;
    
    // Set Background
    game.stage.backgroundColor = '#fff';

    // Load Assets
    game.load.image('hex_512', 'assets/hex_512.png');
    game.load.image('hex_64', 'assets/hex_64.png');
  }

  render () {
    this.state.start('Game')
  }
}
