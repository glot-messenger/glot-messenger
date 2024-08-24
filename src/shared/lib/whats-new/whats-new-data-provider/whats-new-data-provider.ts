import { BaseProvider } from '../../base-provider';
import { whatsNewRequestModule } from './requests-whats-new-data-provider';

// Singleton ==============================================================================
let staticWhatsNewDataProvider: null | WhatsNewDataProvider = null;

class WhatsNewDataProvider extends BaseProvider {
	static override request = whatsNewRequestModule;

	constructor() {
		if (staticWhatsNewDataProvider !== null) {
			return staticWhatsNewDataProvider;
		}

		super();

		staticWhatsNewDataProvider = this;
	};

	override async get() {
		const request = WhatsNewDataProvider.request.post.jsonFormat;

		const valueWhatsNew = await request.create();

		return valueWhatsNew.jsonUnpacking();
	};
};

export { WhatsNewDataProvider };
