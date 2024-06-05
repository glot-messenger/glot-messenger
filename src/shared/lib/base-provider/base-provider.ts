import type { IDataProvider } from '../../types';
import { baseRequestModule } from './request-base-provider';

// Singleton =============================================================================
let staticBaseProvider: null | BaseProvider = null;

class BaseProvider implements IDataProvider {
	static request = baseRequestModule;

   constructor() {
      if (staticBaseProvider !== null) {
         return staticBaseProvider;
      }

      staticBaseProvider = this;
   };

	async get() {
		console.log('Implement the get() method in your specified provider. Now it is taken from the Base Provider.');
	};

	async update() {
		console.log('Implement the update() method in your specified provider. Now it is taken from the Base Provider.');
	};
};

export { BaseProvider };
