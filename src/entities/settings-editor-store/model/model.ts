import { makeAutoObservable, runInAction } from 'mobx';
import { factoryEditor } from '../../../shared';

class $SettingsEditorStore {
	// { settingsEditor: {} }
	data: any = null;

	isLoading: boolean = true;

	isError: boolean = false;

	messageError: string = '';

	service = factoryEditor();

	constructor() {
		makeAutoObservable(this);
	};

	// Получение настроек редактора происходит по id пользователя, который находится в базе: { userId: '1719229880595-user-id' }
	getSettingsEditorAction = async(config: any): Promise<void> => {
		runInAction(() => {
			this.isLoading = true;
			this.isError = false;
			this.messageError = '';
			this.data = null;
		});

		const guard = typeof config !== 'object' ?
			true :
			typeof config === 'object' && !config.hasOwnProperty('userId') ?
			true :
			false;

		try {
			if (guard) {
				throw new Error('Failure settings editor... The config must have the property *userId*...');
			}

			const { message, isError, data } = await this.service.getSettings(config);

			if (isError) {
				throw new Error(message);
			}

			runInAction(() => {
				this.data = data;
				this.isLoading = false;
			});

		} catch (err: any) {
			runInAction(() => {
				this.isError = true;
				this.data = null;
				this.messageError = err.message;
				this.isLoading = false;
			});
		}
	};

	addIdNewColumnAction = (idNewColumn: string): void => {
		if (!this.isLoading && this.data && this.data?.settingsEditor) {
			this.data.settingsEditor.columns.push(idNewColumn);
		}
	};

	setNewOrderColumnsAction = (newColumnsOrder: string[]): void => {
		if (!this.isLoading && this.data && this.data?.settingsEditor) {
			this.data.settingsEditor.columns = newColumnsOrder;
		}
	};

	deleteIdColumnAction = (idDeletedColumn: string): void => {
		if (!this.isLoading && this.data && this.data?.settingsEditor) {
			this.data.settingsEditor.columns = this.data.settingsEditor.columns.filter((idColumn: string): boolean => {
				if (idColumn !== idDeletedColumn) {
					return true;
				}

				return false;
			});
		}
	};
};

const $settingsEditorStore = new $SettingsEditorStore();

export { $settingsEditorStore };
