'use strict';

class GreeterService {
  greet() {
    return {
      message: `${process.env.GREETING}, ${process.env.PERSON}`
    };
  }
}

exports.GreeterService = GreeterService;