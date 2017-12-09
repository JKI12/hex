import BaseUnit from './baseUnit';

let instance;

export default class Archaeologist extends BaseUnit {
  constructor({game, x, y}) {
    super(game, x, y, 'archaeologist');

    this.game = game;
  }

  static instance(game, x, y, asset) {
    if (!instance) {
      instance = new Archaeologist({game, x, y, asset});
    }
    return instance;
  }
}
