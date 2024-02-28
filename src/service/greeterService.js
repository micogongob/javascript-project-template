'use strict';

class GreeterService {
  greet() {
    return `${process.env.GREETING}, ${process.env.PERSON}`;
  }
}

exports.GreeterService = GreeterService;