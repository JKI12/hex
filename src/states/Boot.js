import Phaser from 'phaser'
import terrainTypes from '../constants/terrainTypes';

export default class extends Phaser.State {
  preload () {
    const game = this.game;

    // Set Background
    game.stage.backgroundColor = '#ffe';

    // Load Assets
    game.load.image('hex_512', 'assets/hex_512.png');
    game.load.image('hex_64', 'assets/hex_64.png');

    // Load Terrain Assets
    for (var t in terrainTypes) {
      if (terrainTypes.hasOwnProperty(t)) {
        const assetName = terrainTypes[t];
        game.load.image(`hex_64_${assetName}`, `assets/hex_64_${assetName}.png`);
      }
    }
  }

  render () {
    this.state.start('Game');
  }
}
