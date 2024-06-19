import { factoryEditorDataProvider } from './editor-data-provider';
import { factoryEditorModel } from './factory-editor-model';
import { factoryColumn } from '../column';
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

	async getSettings() {
		const containerData = await this.#dataProvider.get();

		return containerData;
	};

	async createDefaultSettings() { // Тут должно быть обращение в сервис пользователя (USER) для получения его id
		const instanceEditorModel = factoryEditorModel({ userId: `${Date.now()}-user-id` });

		const containerResultColumn = await factoryColumn().createDefaultColumn({ settingId: instanceEditorModel._id });

		if (containerResultColumn.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: containerResultColumn.message + ' Failure editor settings... Due to problems encountered when creating the column, default editor settings cannot be created.',
				data: {
					...containerResultColumn.data,
					editor: null
				}
			});
		}

		instanceEditorModel.columns.push(containerResultColumn.data.columns[0]._id);

		const containerDataSavedInstanceEditor = await this.#dataProvider.set(instanceEditorModel);

		if (containerDataSavedInstanceEditor.isError) {
			//! Error
			// Тут нужно подумать над откатом слотов и колонок, если настройки редактора не смогли создасться или заново отправить запрос, пока он не станет успешным
			// Просто на этом этапе получается, что в бд висят успешно сорзданные слоты, висит успешно созданная колонка, а редактор не может закончить свое сохранение
			// А нам нет смысла хранить слоты, колонку без успешно созданных настроек редактора
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: containerResultColumn.message + ' Failure editor settings... There was a problem when creating default editor settings.',
				data: {
					slots: null,
					columns: null,
					editor: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: containerResultColumn.message + 'Success editor settings! The default editor settings have been successfully created.',
			data: {
				...containerResultColumn.data,
				editor: instanceEditorModel
			}
		});
	};
};

export { Editor };
