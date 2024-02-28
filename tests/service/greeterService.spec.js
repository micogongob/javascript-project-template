const { GreeterService } = require("../../src/service/greeterService");

describe('GreeterService', () => {
  let service;

  beforeEach(() => {
    service = new GreeterService();
  });

  describe('greet', () => {
    it('success', () => {
      expect(service.greet()).toEqual({
        message: 'Hello there, Gandalf-san'
      });
    });
  });
});