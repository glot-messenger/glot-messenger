import { BaseProvider } from '../../base-provider';
import { slotRequestModule } from './requests-slot-data-provider';

// Singleton ==============================================================================
let staticSlotDataProvider: null | SlotDataProvider = null;

class SlotDataProvider extends BaseProvider {
	static override request = slotRequestModule;

	constructor() {
		if (staticSlotDataProvider !== null) {
			return staticSlotDataProvider;
		}

		super();

		staticSlotDataProvider = this;
	};

	override async get(config: any) {
		const request = SlotDataProvider.request.post.jsonFormat.body(config);

		const valueSlot = await request.create();

		return valueSlot.jsonUnpacking();
	};

	override async set(config: any) {
		let request = SlotDataProvider.request;

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

	override async update({ data, config }: any) {
		const { method } = config;

		const request = SlotDataProvider.request.post.nativeFormat.concatUrl(method ? method : 'simpleSlotUpgrade').body({
			data,
			payload: config.payload
		});

		const valueSlot = await request.create();

		return valueSlot.nativeUnpacking();
	}
};

export { SlotDataProvider };
