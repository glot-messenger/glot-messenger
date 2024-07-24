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
		const request = ColumnDataProvider.request.post.jsonFormat.body(config);

		const valueColumns = await request.create();

		return valueColumns.jsonUnpacking();
   };

   override async set(config: any) {
		console.log('Доделать добавление колонки', config);

		let request = ColumnDataProvider.request;

		const { config: configReq } = config;

		if (typeof configReq === 'object' && configReq.hasOwnProperty('concatUrl') && Array.isArray(configReq['concatUrl'])) {
			// Тут конкатинирую дополнительно путь перезаписывая Request ну и далее все сохраняю
		}

		//const { method } = config;

    //  const request = ColumnDataProvider.request.post.jsonFormat.concatUrl(method ? method : 'createColumnByIdEditor').body({
		//	data,
		//	payload: config.payload
		//});

    //  const valueColumn = await request.create();

    //  return valueColumn.nativeUnpacking();
   };

	override async update(config: any) {
		const request = ColumnDataProvider.request.post.nativeFormat.concatUrl('updateColumnByIdEditorAndColumn').body(config);

		const valueColumn = await request.create();

      return valueColumn.nativeUnpacking();
	};
};

export { ColumnDataProvider };
