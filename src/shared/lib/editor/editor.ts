import { factoryEditorDataProvider } from './editor-data-provider';
import { factoryEditorModel } from './factory-editor-model';
import { factoryColumn } from '../column';

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

	async getSettings() {
		const containerData = await this.#dataProvider.get();

		return containerData;
	};

	async createDefaultSettings() { // Тут должно быть обращение в сервис пользователя (USER) для получения его id
		const instanceEditorModel = factoryEditorModel({ userId: `${Date.now()}-user-id` });

		const containerDataColumn = await factoryColumn().createDefaultColumn({ settingId: instanceEditorModel._id });

		instanceEditorModel.columns.push(containerDataColumn.data._id);

		const containerDataSavedInstanceEditor = await this.#dataProvider.set(instanceEditorModel);

		return containerDataSavedInstanceEditor;
	};
};

export { Editor };
