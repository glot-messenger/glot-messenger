import { factoryWhatsNewDataProvider } from './whats-new-data-provider';
import { factoryContainerForResultsSomeAsyncMethods } from '../container-for-results-some-async-methods';

// Singleton =======================================================================
let staticWhatsNew: null | WhatsNew = null;

class WhatsNew {
	#dataProvider = factoryWhatsNewDataProvider();

   constructor() {
      if (staticWhatsNew !== null) {
			return staticWhatsNew;
		}

		staticWhatsNew = this;
   };

	async getWhatsNew() {
		const containerData = await this.#dataProvider.get();

		if (containerData.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: 'Failure whats new... An error occurred while receiving the data for whats new.',
				data: {
					whatsNew: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: 'Success whats new! Successful receipt of the editor`s whats new.',
			data: containerData.data
		});
	};
};

export { WhatsNew };
