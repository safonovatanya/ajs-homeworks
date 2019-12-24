// TODO: write your code here

export default class ErrorRepository {
    constructor() {
      this.error = new Map();
    }
  
    errSet(key, text) {
      this.error.set(key, text);
    }
  
    translate(code) {
      if (this.error.get(code)) {
        return this.error.get(code);
      }
      return 'Unknown error';
    }
  }