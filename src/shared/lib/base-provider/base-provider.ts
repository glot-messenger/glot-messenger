import type { IDataProvider } from '../../types';
import { RequestModule } from '../request-module';

// Singleton =============================================================================
let staticBaseProvider: null | BaseProvider = null;

class BaseProvider implements IDataProvider {
	static request = RequestModule;

   constructor() {
      if (staticBaseProvider !== null) {
         return staticBaseProvider;
      }

      staticBaseProvider = this;
   }
};

export { BaseProvider };
