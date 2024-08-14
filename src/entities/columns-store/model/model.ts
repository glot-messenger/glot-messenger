import { makeAutoObservable, runInAction } from 'mobx';
import { factoryColumn } from '../../../shared';
import { $settingsEditorStore } from '../../settings-editor-store';
import { $slotsEditorStore } from '../../slots-store';

class $ColumnsEditorStore {
	// { columnsEditor: [] }
	data: any = null;

	isLoading: boolean = true;

	isError: boolean = false;

	messageError: string = '';

	service = factoryColumn();

	isErrorForSomeOperation: boolean = false;

	messageErrorForSomeOperation: string = '';

	constructor() {
		makeAutoObservable(this);
	};

	getColumnsEditorAction = async(config: any): Promise<void> => { // получение колонок происходит по id настроек редактора и по массиву колонок, для конкретного редактора { settingId: '66a2a9f0738f8cc0f1aa7306', columns: ['66a2b8e61a2f1d3e154d0df9', '66a2b8e61a2f1d3e154d0dfa', '66a2b8e61a2f1d3e154d0dfb'] }
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

	addNewColumnInEditorAction = async(config: any): Promise<void> => { // добавление новой колонки происходит по id настроек редактора { settingId: '66a2a9f0738f8cc0f1aa7306' }
		runInAction(() => {
			this.isErrorForSomeOperation = false;
			this.messageErrorForSomeOperation = '';
		});

		const guard = typeof config !== 'object' ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('settingId') || !config['settingId']) ?
			true :
			false;

		try {
			if (guard) {
				throw new Error('Failure columns editor... The config must have the property *settingId*...');
			}

			const { message, isError, data } = await this.service.addNewColumn(config);

			if (isError) {
				throw new Error(message);
			}

			runInAction(() => {
				const { newColumnInEditor } = data;

				if (!this.isLoading && this.data) {
					if (this.data.columnsEditor) {
						this.data.columnsEditor.push(newColumnInEditor);

						$settingsEditorStore.addIdNewColumnAction(newColumnInEditor._id);

						$slotsEditorStore.addEmptyPackSlotsForNewColumnAction(newColumnInEditor._id);
					}
				}
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
