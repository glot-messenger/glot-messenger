import { makeAutoObservable, runInAction } from 'mobx';
import { factoryColumn } from '../../../shared';

class $ColumnsEditorStore {
	data = null;

	isLoading: boolean = true;

	isError: boolean = false;

	messageError: string = '';

	service = factoryColumn();

	constructor() {
		makeAutoObservable(this);
	};

	getColumnsEditorAction = async(config: any): Promise<void> => { // получение колонок происходит по id настроек редактора { settingId: 1721051878189 }
		runInAction(() => {
			this.isLoading = true;
			this.isError = false;
			this.messageError = '';
			this.data = null;
		});

		try {
			if (typeof config !== 'object' || (typeof config === 'object' && !config.hasOwnProperty('settingId'))) {
				throw new Error('Failure columns editor... The config must have the property *settingId*...');
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
				this.isError = true;
				this.data = null;
				this.messageError = err.message;
				this.isLoading = false;
			});
		}
	};
};

const $columnsEditorStore = new $ColumnsEditorStore();

export { $columnsEditorStore };
