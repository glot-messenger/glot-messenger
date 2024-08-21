import { makeAutoObservable, runInAction } from 'mobx';
import { factorySlot } from '../../../shared';
import { $columnsEditorStore } from '../../columns-store';

class $SlotsEditorStore {
	// { slotsEditor: { 66a2b8e61a2f1d3e154d0df9: [] } }
	data: any = null;

	isLoading: boolean = true;

	isError: boolean = false;

	messageError: string = '';

	service = factorySlot();

	// =======================================

	isErrorForSomeOperation: boolean = false;

	messageErrorForSomeOperation: string = '';

	constructor() {
		makeAutoObservable(this);
	};

	// получение пака из слотов происходит по объекту (columnsIdsWithSlotsPack), в котором ключи - это id колонок, а в качестве их значений массивы с id слотов, которые надо получить для конкретной колонки
	// { columnsIdsWithSlotsPack: { 66a2b8e61a2f1d3e154d0df9: ["66a35f805d84bec8e8890dbe", "66a35f805d84bec8e8890dbf", "66a35f805d84bec8e8890dc0"], 66a2b8e61a2f1d3e154d0dfa: ["66a35f805d84bec8e8890dc1", "66a35f805d84bec8e8890dc2", "66a35f805d84bec8e8890dc3"] } }
	getSlotsEditorAction = async(config: any): Promise<void> => {
		runInAction(() => {
			this.isLoading = true;
			this.isError = false;
			this.messageError = '';
			this.data = null;
		});

		const guard = typeof config !== 'object' ?
			true :
			typeof config === 'object' && !config.hasOwnProperty('columnsIdsWithSlotsPack') ?
			true :
			typeof config === 'object' && typeof config['columnsIdsWithSlotsPack'] !== 'object' ?
			true :
			false;

		try {
			if (guard) {
				throw new Error('Failure slots editor... The config must have the property *columnsIdsWithSlotsPack*...');
			}

			const { message, isError, data } = await this.service.getSlots(config);

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

	// Добавление нового слота в колонку происходит по { columnId: '213123sdfwercf2312321dsf' }
	addNewSlotToTheColumnEditorAction = async(config: any): Promise<void> => {
		runInAction(() => {
			this.isErrorForSomeOperation = false;
			this.messageErrorForSomeOperation = '';
		});

		const guard = typeof config !== 'object' ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('columnId') || !config['columnId']) ?
			true :
			false;

		try {
			if (guard) {
				throw new Error('Failure slots editor... The config must have the property *columnId*...');
			}

			const { message, isError, data } = await this.service.addNewSlot(config);

			if (isError) {
				throw new Error(message);
			}

			runInAction(() => {
				const { newSlotToTheColumnEditor } = data;

				if (!this.isLoading && this.data && this.data?.slotsEditor) {
					this.data.slotsEditor[newSlotToTheColumnEditor.columnId].push(newSlotToTheColumnEditor);

					$columnsEditorStore.addIdNewSlotAction(newSlotToTheColumnEditor._id, newSlotToTheColumnEditor.columnId);
				}
			});

		} catch (err: any) {
			runInAction(() => {
				this.isErrorForSomeOperation = true;
				this.messageErrorForSomeOperation = err.message;
			});
		}
	};

	// Удаление слота происходит по id колонки и id самого слота { columnId: '66a2b8e61a2f1d3e154d0dfa', slotId: '66a35f805d84bec8e8890dc3' }
	deleteSlotByIdEditorAction = async(config: any): Promise<void> => {
		runInAction(() => {
			this.isErrorForSomeOperation = false;
			this.messageErrorForSomeOperation = '';
		});

		const guard = typeof config !== 'object' ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('columnId') || !config['columnId']) ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('slotId') || !config['slotId']) ?
			true :
			false;

		try {
			if (guard) {
				throw new Error('Failure slots editor... The config must have the property *columnId*, *slotId*...');
			}

			const { message, isError, data } = await this.service.deleteSlot(config);

			if (isError) {
				throw new Error(message);
			}

			runInAction(() => {
				const { deletedSlot } = data;

				if (!this.isLoading && this.data && this.data?.slotsEditor) {
					if (Array.isArray(this.data.slotsEditor[deletedSlot.columnId])) {
						this.data.slotsEditor[deletedSlot.columnId] = this.data.slotsEditor[deletedSlot.columnId].filter((slotData: any): boolean => {
							if (slotData._id !== deletedSlot._id) {
								return true;
							}

							return false;
						});

						$columnsEditorStore.deleteIdSlotAction(deletedSlot._id, deletedSlot.columnId);
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

	// Обновление конкретного слота происходит по id слота и по id колонки при помощи обновляющей нагрузки value { columnId: '66a2b8e61a2f1d3e154d0dfa', slotId: '66a35f805d84bec8e8890dc1', isEmpty: false, value: { nameWidget: '', isEmpty: true } } }
	updateSlotEditorAction = async(config: any): Promise<void> => {
		runInAction(() => {
			this.isErrorForSomeOperation = false;
			this.messageErrorForSomeOperation = '';
		});

		const guard = typeof config !== 'object' ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('columnId') || !config['columnId']) ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('slotId') || !config['slotId']) ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('value') || !config['value']) ?
			true :
			typeof config === 'object' && typeof config['value'] !== 'object' ?
			true :
			false;

		try {
			if (guard) {
				throw new Error('Failure slots editor... The config must have the property *columnId*, *slotId* and payload *value*...');
			}

			const { message, isError, data } = await this.service.updateSlotById(config);

			if (isError) {
				throw new Error(message);
			}

			runInAction(() => {
				const { updatedSlot } = data;

				if (!this.isLoading && this.data && this.data?.slotsEditor) {
					const arraySlotsForTargetColumn = this.data.slotsEditor[config.columnId];

					if (Array.isArray(arraySlotsForTargetColumn)) {
						for (let m = 0; m < arraySlotsForTargetColumn.length; m++) {
							const slotData = arraySlotsForTargetColumn[m];

							if (updatedSlot._id === slotData._id) {
								this.data.slotsEditor[config.columnId][m] = updatedSlot;

								break;
							}
						}
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

	// Обновление позиции слота внутри колонки происходит по id конкретного слота, по id конкретной колонки, в которой находится слот и по обновляющей нагрузке value { slotId: '123943fjgld213dkjlfg213', columnId: 'dfgweqwqedfg21312343fdgret123', value: { position: 'index + 1' } }
	changingSlotEditorPositionAction = async(config: any): Promise<void> => {
		runInAction(() => {
			this.isErrorForSomeOperation = false;
			this.messageErrorForSomeOperation = '';
		});

		const guard = typeof config !== 'object' ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('columnId') || !config['columnId']) ?
			true :
			typeof config === 'object' && (!config.hasOwnProperty('slotId') || !config['slotId']) ?
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
				throw new Error('Failure slots editor... The config must have the property *columnId*, *slotId* and payload *value* with property *position*...');
			}

			//! ПЕРЕД САМЫМ ЗАПРОСОМ НАДО ПРОВЕРИТЬ ПОЗИЦИЮ СЛОТА, ВДРУГ СЛОТ И ТАК СТОИТ НА ТРЕБУЕМОМ МЕСТЕ И С НИМ НЕ НАДО НИЧЕГО ДЕЛАТЬ, ТОГДА БЕССМЫСЛЕННО ГРУЗИТЬ СЕРВЕР ЗАПРОСАМИ

			const { message, isError, data } = await this.service.movingSlotById(config);

			if (isError) {
				throw new Error(message);
			}

			runInAction(() => {
				const { movableSlot, newIndex, newSlotsOrder } = data;

				if (!this.isLoading && this.data && this.data?.slotsEditor) {
					const arraySlotsForTargetColumn = this.data.slotsEditor[config.columnId];

					if (Array.isArray(arraySlotsForTargetColumn)) {
						const packSlotsData: Record<string, any> = {};

						for (let m = 0; m < arraySlotsForTargetColumn.length; m++) {
							const slotData = arraySlotsForTargetColumn[m];

							packSlotsData[slotData._id] = slotData;
						}

						for (let v = 0; v < newSlotsOrder.length; v++) {
							const idForCorrectPosition = newSlotsOrder[v];

							arraySlotsForTargetColumn[v] = packSlotsData[idForCorrectPosition];
						}

						$columnsEditorStore.setNewOrderSlotsAction(newSlotsOrder, config.columnId);
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

	addEmptyPackSlotsForNewColumnAction = (idNewColumn: string): void => {
		if (!this.isLoading && this.data && this.data?.slotsEditor) {
			this.data.slotsEditor[idNewColumn] = [];
		}
	};

	deletePackSlotsAndKeyForDeletedColumnAction = (idDeletedColumn: string): void => {
		if (!this.isLoading && this.data && this.data?.slotsEditor) {
			delete this.data.slotsEditor[idDeletedColumn];
		}
	};
};

const $slotsEditorStore = new $SlotsEditorStore();

export { $slotsEditorStore };
