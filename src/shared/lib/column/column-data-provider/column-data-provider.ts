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

      console.log(this, 'THIS COLUMN DATA PROVIDER CLASS', 'попадает EDITOR PROVIDER');
      

      staticColumnDataProvider = this;
   };

   override async get() {
      console.log('async get ColumnDataProvider');
   };

   override async set(instanceColumn: any) {
      console.log(instanceColumn, 'Внутри ColumnDataProvider');
      

      // const request = ColumnDataProvider.request.post.nativeFormat.concatUrl('createColumnByIdEditor').body({
		// 	data: instanceColumn
		// });

      // const valueColumn = await request.create();

      // return valueColumn.nativeUnpacking();
   };
};

export { ColumnDataProvider };
