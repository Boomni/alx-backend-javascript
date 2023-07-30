class Currency {
  constructor(code, name) {
    this._code = '';
    this._name = '';

    this.name = name;
    this.code = code;
  }

  // Getter and Setter for 'code'
  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter and Setter for 'name'
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;
