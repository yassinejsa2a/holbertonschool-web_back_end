export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(val) {
    if (typeof val === 'number') this._size = val;
    else Error('bruhbruhsize');
  }

  get location() {
    return this._location;
  }

  set location(val) {
    if (typeof val === 'string') this._location = val;
    else Error('bruhbruhloc');
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
