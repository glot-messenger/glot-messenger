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

	// =======================================

	isErrorForSomeOperation: boolean = false;

	messageErrorForSomeOperation: string = '';

	constructor() {
		makeAutoObservable(this);
	};

	// Получение колонок происходит по id настроек редактора и по массиву колонок, для конкретного редактора { settingId: '66a2a9f0738f8cc0f1aa7306', columns: ['66a2b8e61a2f1d3e154d0df9', '66a2b8e61a2f1d3e154d0dfa', '66a2b8e61a2f1d3e154d0dfb'] }
	getColumnsEditorAction = async(config: any): Promise<void> => {
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

	// Добавление новой колонки происходит по id настроек редактора { settingId: '66a2a9f0738f8cc0f1aa7306' }
	addNewColumnInEditorAction = async(config: any): Promise<void> => {
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

				if (!this.isLoading && this.data && this.data?.columnsEditor) {
					this.data.columnsEditor.push(newColumnInEditor);

					$settingsEditorStore.addIdNewColumnAction(newColumnInEditor._id);

					$slotsEditorStore.addEmptyPackSlotsForNewColumnAction(newColumnInEditor._id);
				}
			});

		} catch (err: any) {
			runInAction(() => {
				this.isErrorForSomeOperation = true;
				this.messageErrorForSomeOperation = err.message;
			});
		}
	};

	// Обновление конкретной колонки происходит по id колонки при помощи обновляющей нагрузки value { columnId: '123943fjgld213dkjlfg213', value: { accessForChanges (ключ колонки): true } }
	updateColumnEditorAction = async(config: any): Promise<void> => {
		runInAction(() => {
			this.isErrorForSomeOperation = false;
			this.messageErrorForSomeOperation = '';
		});

		const guard = typeof config !== 'object' ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('columnId') || !config['columnId']) ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('value') || !config['value']) ?
			true :
			typeof config === 'object' && typeof config['value'] !== 'object' ?
			true :
			false;

		try {
			if (guard) {
				throw new Error('Failure columns editor... The config must have the property *columnId* and payload *value*...');
			}

			//! ПЕРЕД САМЫМ ЗАПРОСОМ НАДО ПРОВЕРИТЬ, А НЕ ИМЕЕТ ЛИ КОЛОНКА УЖЕ ТАКОЕ ЗНАЧЕНИЕ В СВОЕМ СВОЙСТЕ, МОЖЕТ И НЕ НАДО НАГРУЖАТЬ СЕРВЕР ЭТИМИ БЕССМЫСЛЕННЫМИ ЗАПРОСАМИ

			const { message, isError, data } = await this.service.updateColumnById(config);

			if (isError) {
				throw new Error(message);
			}

			runInAction(() => {
				const { updatedColumn } = data;

				if (!this.isLoading && this.data && this.data?.columnsEditor) {
					let index = -1;

					for (let m = 0; m < this.data.columnsEditor.length; m++) {
						const column = this.data.columnsEditor[m];

						if (column._id === updatedColumn._id) {
							index = m;

							break;
						}
					}

					if (index >= 0) {
						this.data.columnsEditor[index] = updatedColumn;
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

	// Обновление позиции колонки в редакторе происходит по id конкретной колонки, по id конкретного редактора, в котором находится колонки и по обновляющей нагрузке value { columnId: '123943fjgld213dkjlfg213', settingId: 'dfgweqwqedfg21312343fdgret123', value: { position: 'index + 1' } }
	changingColumnEditorPositionAction = async(config: any): Promise<void> => {
		runInAction(() => {
			this.isErrorForSomeOperation = false;
			this.messageErrorForSomeOperation = '';
		});

		const guard = typeof config !== 'object' ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('columnId') || !config['columnId']) ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('settingId') || !config['settingId']) ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('value') || !config['value']) ?
			true :
			typeof config === 'object' && typeof config['value'] !== 'object' ?
			true :
			typeof config === 'object' && typeof config['value'] === 'object' && (!config['value'].hasOwnProperty('position') || !(config['value']?.position)) ?
			true :
			false;

		try {
			if (guard) {
				throw new Error('Failure columns editor... The config must have the property *columnId*, *settingId* and payload *value* with property *position*...');
			}

			//! ПЕРЕД САМЫМ ЗАПРОСОМ НАДО ПРОВЕРИТЬ ПОЗИЦИЮ КОЛОНКИ, ВДРУГ КОЛОНКА И ТАК СТОИТ НА ТРЕБУЕМОМ МЕСТЕ И С НЕЙ НЕ НАДО НИЧЕГО ДЕЛАТЬ, ТОГДА БЕССМЫСЛЕННО ГРУЗИТЬ СЕРВЕР ЗАПРОСАМИ

			const { message, isError, data } = await this.service.movingColumnById(config);

			if (isError) {
				throw new Error(message);
			}

			runInAction(() => {
				const { movableColumn, newColumnsOrder, newIndex } = data;

				if (!this.isLoading && this.data && this.data?.columnsEditor) {
					const packColumnsData: Record<string, any> = {};

					for (let m = 0; m < this.data.columnsEditor.length; m++) {
						const columnData = this.data.columnsEditor[m];

						packColumnsData[columnData._id] = columnData;
					}

					for (let v = 0; v < newColumnsOrder.length; v++) {
						const idForCorrectPosition = newColumnsOrder[v];

						this.data.columnsEditor[v] = packColumnsData[idForCorrectPosition];
					}

					$settingsEditorStore.setNewOrderColumnsAction(newColumnsOrder);
				}
			});

		} catch (err: any) {
			runInAction(() => {
				this.isErrorForSomeOperation = true;
				this.messageErrorForSomeOperation = err.message;
			});
		}
	};

	addIdNewSlotAction = (idNewSlot: string, columnId: string): void => {
		if (!this.isLoading && this.data && this.data?.columnsEditor) {
			const searchColumn = this.data.columnsEditor.find((columnData: any) => {
				return columnData._id === columnId;
			});

			if (searchColumn) {
				searchColumn.slots.push(idNewSlot);
			}
		}
	};
};

const $columnsEditorStore = new $ColumnsEditorStore();

export { $columnsEditorStore };
