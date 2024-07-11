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
		const request = SlotDataProvider.request.post.nativeFormat.concatUrl('fetchSlotsByIdsColumns').body(config);

		const valueSlot = await request.create();

		return valueSlot.nativeUnpacking();
	};

	override async set({ data, config }: any) {
		const { method } = config;

		const request = SlotDataProvider.request.post.nativeFormat.concatUrl(method ? method : 'createSlotByIdColumn').body({
			data,
			payload: config.payload
		});

		const valueSlot = await request.create();

		return valueSlot.nativeUnpacking();
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
