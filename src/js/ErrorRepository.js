export default class ErrorRepository {
  constructor() {
      this.repository = new Map();
  }

  addError(code, error) {
      this.repository.set(code, error);
  }

  translate(code) {
      if (this.repository.has(code)) {
          return this.repository.get(code);
      }
      return 'Unknown error';
  }
}
