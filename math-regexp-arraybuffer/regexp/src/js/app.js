export default class Validator {
    validateUsername(name) {
      this.name = name;
      return this.name.search(/^[^\d_-][a-z_-]+\d{0,3}[a-z_-]+[^\d_-]$/i) !== -1;
    }
  }