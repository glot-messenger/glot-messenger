import { factoryEditorDataProvider } from './editor-data-provider';
import { factoryContainerForResultsSomeAsyncMethods } from '../container-for-results-some-async-methods';

// Singleton =======================================================================
let staticEditor: null | Editor = null;

class Editor {
   #dataProvider = factoryEditorDataProvider();

   constructor() {
      if (staticEditor !== null) {
         return staticEditor;
      }

      staticEditor = this;
   };

	async getSettings(config: any) {
		const containerData = await this.#dataProvider.get(config);

		if (containerData.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: 'Failure editor settings... Having problems getting your personal editor settings...',
				data: {
					settingsEditor: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: 'Success editor settings! The request was processed without errors when receiving the editor settings.',
			data: containerData.data
		});
	};
};

export { Editor };
