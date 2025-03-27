export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val === 'string') this._name = val;
    else TypeError('bruh typeof name != string');
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val === 'string') this._code = val;
    else TypeError('bruh typeof code != string');
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
