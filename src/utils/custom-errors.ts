export class InvalidDataError extends Error {
  constructor(message: string = 'Invalid data from server') {
    super(message);
    this.name = 'InvalidDataError';
  }
}
