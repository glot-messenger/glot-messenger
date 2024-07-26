import { makeAutoObservable, runInAction } from 'mobx';
import { factoryColumn } from '../../../shared';

class $ColumnsEditorStore {
	data = null;

	isLoading: boolean = true;

	isError: boolean = false;

	messageError: string = '';

	service = factoryColumn();

	isErrorForSomeOperation: boolean = false;

	messageErrorForSomeOperation: string = '';

	constructor() {
		makeAutoObservable(this);
	};

	getColumnsEditorAction = async(config: any): Promise<void> => { // получение колонок происходит по id настроек редактора { settingId: 1721051878189 }
		runInAction(() => {
			this.isLoading = true;
			this.isError = false;
			this.messageError = '';
			this.data = null;
			this.isErrorForSomeOperation = false;
			this.messageErrorForSomeOperation = '';
		});

		const guard = typeof config !== 'object' ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('settingId') || !config['settingId']) ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('columns') || !config['columns'] || !Array.isArray(config['columns'])) ?
			true :
			false;

		try {
			if (guard) {
				throw new Error('Failure columns editor... The config must have the property *settingId* and *columns*...');
			}

			const { message, isError, data } = await this.service.getColumns(config);

			if (isError) {
				throw new Error(message);
			}

			runInAction(() => {
				this.data = data;
				this.isLoading = false;
			});

		} catch (err: any) {
			runInAction(() => {
				this.isErrorForSomeOperation = true;
				this.isError = true;
				this.data = null;
				this.messageError = err.message;
				this.messageErrorForSomeOperation = err.message;
				this.isLoading = false;
			});
		}
	};

	addNewColumnInEditorAction = async(config: any): Promise<void> => { // добавление новой колонки происходит по id настроек редактора { settingId: 1721051878189 }
		runInAction(() => {
			this.isErrorForSomeOperation = false;
			this.messageErrorForSomeOperation = '';
		});

		try {
			if (typeof config !== 'object' || (typeof config === 'object' && (!config.hasOwnProperty('settingId') || !config['settingId']))) {
				throw new Error('Failure columns editor... The config must have the property *settingId*...');
			}

			const { message, isError, data } = await this.service.addNewColumn(config);

			if (isError) {
				throw new Error(message);
			}

			runInAction(() => {
				// ТУТ ДОБАВЛЕНИЕ НОВОЙ КОЛОНКИ
			});

		} catch (err: any) {
			runInAction(() => {
				this.isErrorForSomeOperation = true;
				this.messageErrorForSomeOperation = err.message;
			});
		}
	};
};

const $columnsEditorStore = new $ColumnsEditorStore();

export { $columnsEditorStore };
