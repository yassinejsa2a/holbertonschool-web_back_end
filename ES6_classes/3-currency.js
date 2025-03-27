export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val === 'string') this._code = val;
    else throw new TypeError('im bad');
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val === 'string') this._name = val;
    else throw new TypeError('so bad');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
