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
		let request = ColumnDataProvider.request;

		const { configRequest } = config;

		if (typeof configRequest === 'object' && configRequest.hasOwnProperty('concatUrl') && Array.isArray(configRequest['concatUrl'])) {
			const arraySegmentsUrlRequest = configRequest['concatUrl'];

			for (let z = 0; z < arraySegmentsUrlRequest.length; z++) {
				request = request.concatUrl(arraySegmentsUrlRequest[z]);
			}
		}

		delete config['configRequest'];

		request = request.post.jsonFormat.body(config);

		const valueColumns = await request.create();

		return valueColumns.jsonUnpacking();
   };

	override async update(config: any) {
		let request = ColumnDataProvider.request;

		const { configRequest } = config;

		if (typeof configRequest === 'object' && configRequest.hasOwnProperty('concatUrl') && Array.isArray(configRequest['concatUrl'])) {
			const arraySegmentsUrlRequest = configRequest['concatUrl'];

			for (let z = 0; z < arraySegmentsUrlRequest.length; z++) {
				request = request.concatUrl(arraySegmentsUrlRequest[z]);
			}
		}

		delete config['configRequest'];

		request = request.patch.jsonFormat.body(config);

		const valueColumns = await request.create();

		return valueColumns.jsonUnpacking();
	};

	override async operation(config: any) {
		let request = ColumnDataProvider.request;

		const { configRequest } = config;

		if (typeof configRequest === 'object' && configRequest.hasOwnProperty('concatUrl') && Array.isArray(configRequest['concatUrl'])) {
			const arraySegmentsUrlRequest = configRequest['concatUrl'];

			for (let z = 0; z < arraySegmentsUrlRequest.length; z++) {
				request = request.concatUrl(arraySegmentsUrlRequest[z]);
			}
		}

		delete config['configRequest'];

		request = request.post.jsonFormat.body(config);

		const valueColumns = await request.create();

		return valueColumns.jsonUnpacking();
	};
};

export { ColumnDataProvider };
