import BaseResource from '../baseResource';

export default class Forest extends BaseResource {
  constructor({game, x, y}) {
    super(game, x, y, 'hex_64_forest');
  }
}
