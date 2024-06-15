import { BaseProvider } from '../../base-provider';
import { columnRequestModule } from './requests-column-data-provider';

// Singleton ==============================================================================
let staticColumnDataProvider: null | ColumnDataProvider = null;

class ColumnDataProvider extends BaseProvider {
   static override request = columnRequestModule;

   constructor() {
      if (staticColumnDataProvider !== null) {
         return staticColumnDataProvider;
      }

      super();

      staticColumnDataProvider = this;
   };

   override async get() {
      console.log('async get ColumnDataProvider');
   };

   override async set(instanceColumnModel: any) {
      const request = ColumnDataProvider.request.post.nativeFormat.concatUrl('createColumnByIdEditor').body({
			data: instanceColumnModel
		});

      const valueColumn = await request.create();

      return valueColumn.nativeUnpacking();
   };
};

export { ColumnDataProvider };
