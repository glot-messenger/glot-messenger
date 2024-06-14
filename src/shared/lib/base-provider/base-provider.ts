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

	async get(): Promise<any> {
		console.log('Implement the get() method in your specified provider. Now it is taken from the Base Provider.');

		return ({
			message: 'Implement the get() method in your specified provider. Now it is taken from the Base Provider.'
		});
	};

	async set(data: any): Promise<any> {
		console.log('Implement the set() method in your specified provider. Now it is taken from the Base Provider.');

		return ({
			message: 'Implement the set() method in your specified provider. Now it is taken from the Base Provider.',
			value: data
		});
	};

	async update(): Promise<any> {
		console.log('Implement the update() method in your specified provider. Now it is taken from the Base Provider.');

		return ({
			message: 'Implement the update() method in your specified provider. Now it is taken from the Base Provider.'
		});
	};
};

export { BaseProvider };
