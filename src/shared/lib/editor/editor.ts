import { factoryEditorDataProvider } from './editor-data-provider';

// Singleton =======================================================================
let staticEditor: null | Editor = null;

class Editor {
   storeColumns = [];

   #dataProvider = factoryEditorDataProvider();

   constructor() {
      if (staticEditor !== null) {
         return staticEditor;
      }

      staticEditor = this;
   };

	async getSettings() {
		const containerData = await this.#dataProvider.get();

		this.storeColumns = containerData.data.columns;

    return containerData;
	};
};

export { Editor };
