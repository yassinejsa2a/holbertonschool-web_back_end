export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val === 'string') this._name = val;
    else throw new TypeError('Name must be a string');
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val === 'number') this._length = val;
    else throw new TypeError('Length must be a number');
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (Array.isArray(val)) {
      for (const i in val) {
        if (typeof val[i] === 'string') this._students = val;
        else throw new TypeError('Student munt be a array of string');
      }
    } else throw new TypeError('student must be a array');
  }
}
