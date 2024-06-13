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

	async createDefaultSettings() { // Тут должно быть обращение в сервис пользователя для получения его id
		const instancelEditor = factoryEditorModel({ userId: `${Date.now()}-user-id` });

		console.log(instancelEditor, "MODEL EDITOR");
		const instanceColumn = factoryColumn().createDefaultColumn({ settingId: instancelEditor._id });

		// После того как создастся колонка и ее id запишется в настройки редактора можно будет асинхронно сохранять в базу
		// API

		return instancelEditor;
	};
};

export { Editor };
