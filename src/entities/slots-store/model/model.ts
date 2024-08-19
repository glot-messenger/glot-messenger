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

	addEmptyPackSlotsForNewColumnAction = (idNewColumn: string): void => {
		if (!this.isLoading && this.data && this.data?.slotsEditor) {
			this.data.slotsEditor[idNewColumn] = [];
		}
	};
};

const $slotsEditorStore = new $SlotsEditorStore();

export { $slotsEditorStore };
