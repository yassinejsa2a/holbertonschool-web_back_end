import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft = '', floors = 0) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}