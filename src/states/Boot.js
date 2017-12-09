import Phaser from 'phaser'
import terrainTypes from '../constants/terrainTypes';
import resourceTypes from '../constants/resourceTypes';

export default class extends Phaser.State {
  preload () {
    const game = this.game;

    // Set Background
    game.stage.backgroundColor = '#ffe';

    // Load Assets
    game.load.image('archaeologist', 'assets/Archaeologist.png');
    game.load.image('hex_512', 'assets/hex_512.png');
    game.load.image('hex_64', 'assets/hex_64.png');

    // Load Terrain Assets
    for (let t in terrainTypes) {
      if (terrainTypes.hasOwnProperty(t)) {
        const assetName = terrainTypes[t];
        game.load.image(`hex_64_${assetName}`, `assets/hex_64_${assetName}.png`);
      }
    }

    // Load Resource Assets
    for (let r in resourceTypes) {
      if (resourceTypes.hasOwnProperty(r)) {
        const assetName = resourceTypes[r];
        game.load.image(`hex_64_${assetName}`, `assets/hex_64_${assetName}.png`);
      }
    }

    // Set Physics
    game.physics.startSystem(Phaser.Physics.ARCADE);
  }

  render () {
    this.state.start('Game');
  }
}
