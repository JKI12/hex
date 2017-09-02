import Phaser from 'phaser-ce';

const hexSize = {
  width: 52,
  height: 60
}

class Map {
  constructor(game) {
    this.game = game;
  }

  generateTiles(gridSizeX, gridSizeY) {
    const columns = [ Math.ceil(gridSizeX / 2), Math.floor(gridSizeX / 2) ];
    const sectorWidth = hexSize.width;
    const sectorHeight = hexSize.height/4*3;
    const graident = (hexSize.height / 4) / (hexSize.width / 2);
    const hexGroup = this.game.add.group();
  
    for (let i = 0; i < gridSizeY / 2; i++) {
      for (let j = 0; j < gridSizeX; j++) {
        if (gridSizeY%2 === 0 || i+1 < gridSizeY / 2 || j%2 === 0) {
          const hexX = hexSize.width * j / 2;
          const hexY = hexSize.height * i * 1.5 + (hexSize.height / 4*3) * (j%2);
          const hexagon = game.add.sprite(hexX, hexY, 'hex_64');
          hexGroup.add(hexagon);
        }
      }
    }

    hexGroup.x = (game.width - hexSize.width * Math.ceil(gridSizeX/2)) /2;
    if(gridSizeX%2 === 0){
      hexGroup.x -= hexSize.width / 4;
    }

    hexGroup.y = (game.height - Math.ceil(gridSizeY/2) * hexSize.height - Math.floor(gridSizeY/2) * hexSize.height / 2) /2;
    if(gridSizeY%2 === 0){
         hexGroup.y -= hexSize.height / 8;
    }
  };
}

module.exports = Map;