/* eslint-disable class-methods-use-this */
class GreeterService {
  greet() {
    return {
      message: `${process.env.GREETING}, ${process.env.PERSON}`
    };
  }
}

module.exports = GreeterService;
