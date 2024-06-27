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

   override async get(config: any) {
		const request = ColumnDataProvider.request.post.nativeFormat.concatUrl('fetchColumnsByIdEditor').body(config);

		const valueColumns = await request.create();

		return valueColumns.nativeUnpacking();
   };

   override async set(instanceColumnModel: any) {
      const request = ColumnDataProvider.request.post.nativeFormat.concatUrl('createColumnByIdEditor').body({
			data: instanceColumnModel
		});

      const valueColumn = await request.create();

      return valueColumn.nativeUnpacking();
   };

	override async update(config: any) {
		const request = ColumnDataProvider.request.post.nativeFormat.concatUrl('updateColumnByIdEditorAndColumn').body(config);

		const valueColumn = await request.create();

      return valueColumn.nativeUnpacking();
	};
};

export { ColumnDataProvider };
