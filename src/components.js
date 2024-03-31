import GreeterService from './services/GreeterService.js';

const greeterService = new GreeterService();

const components = {
  greeterService
};

export { components as default, greeterService };
