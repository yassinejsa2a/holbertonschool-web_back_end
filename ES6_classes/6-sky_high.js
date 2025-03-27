import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (typeof val === 'number') this._sqft = val;
  }

  get floors() {
    return this._floors;
  }

  set floors(val) {
    if (typeof val === 'number') this._floors = val;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
