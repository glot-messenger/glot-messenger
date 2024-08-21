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

		const valueSlots = await request.create();

		return valueSlots.jsonUnpacking();
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

		const valueSlot = await request.create();

		return valueSlot.jsonUnpacking();
	};

	override async update(config: any) {
		let request = SlotDataProvider.request;

		const { configRequest } = config;

		if (typeof configRequest === 'object' && configRequest.hasOwnProperty('concatUrl') && Array.isArray(configRequest['concatUrl'])) {
			const arraySegmentsUrlRequest = configRequest['concatUrl'];

			for (let z = 0; z < arraySegmentsUrlRequest.length; z++) {
				request = request.concatUrl(arraySegmentsUrlRequest[z]);
			}
		}

		delete config['configRequest'];

		request = request.patch.jsonFormat.body(config);

		const valueSlot = await request.create();

		return valueSlot.jsonUnpacking();
	};

	override async delete(config: any) {
		let request = SlotDataProvider.request;

		const { configRequest } = config;

		if (typeof configRequest === 'object' && configRequest.hasOwnProperty('concatUrl') && Array.isArray(configRequest['concatUrl'])) {
			const arraySegmentsUrlRequest = configRequest['concatUrl'];

			for (let z = 0; z < arraySegmentsUrlRequest.length; z++) {
				request = request.concatUrl(arraySegmentsUrlRequest[z]);
			}
		}

		delete config['configRequest'];

		request = request.delete.jsonFormat.body(config);

		const valueSlot = await request.create();

		return valueSlot.jsonUnpacking();
	};

	override async operation(config: any) {
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

		const valueSlot = await request.create();

		return valueSlot.jsonUnpacking();
	};
};

export { SlotDataProvider };
