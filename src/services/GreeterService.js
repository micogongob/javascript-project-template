/* eslint-disable class-methods-use-this */
export default class GreeterService {
  greet() {
    return {
      message: `${process.env.GREETING}, ${process.env.PERSON}`
    };
  }
}
