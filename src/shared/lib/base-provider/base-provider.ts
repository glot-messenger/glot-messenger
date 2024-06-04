import type { IDataProvider } from '../../types';

// Singleton
let staticBaseProvider: null | BaseProvider = null;

class BaseProvider implements IDataProvider {
   constructor() {
      if (staticBaseProvider !== null) {
         return staticBaseProvider;
      }

      staticBaseProvider = this;
   }
};

export { BaseProvider };
