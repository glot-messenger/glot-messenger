import { makeAutoObservable, runInAction } from 'mobx';
import { factorySlot } from '../../../shared';

class $SlotsEditorStore {
	// { slotsEditor: { 66a2b8e61a2f1d3e154d0df9: [] } }
	data: any = null;

	isLoading: boolean = true;

	isError: boolean = false;

	messageError: string = '';

	service = factorySlot();

	constructor() {
		makeAutoObservable(this);
	};

	getSlotsEditorAction = async(config: any): Promise<void> => {
		runInAction(() => {
			this.isLoading = true;
			this.isError = false;
			this.messageError = '';
			this.data = null;
		});

		try {
			if (typeof config !== 'object' || ((typeof config === 'object' && !config.hasOwnProperty('columnsIdsWithSlotsPack')) || (typeof config === 'object' &&  typeof config['columnsIdsWithSlotsPack'] !== 'object'))) {
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

	addEmptyPackSlotsForNewColumnAction = (idNewColumn: string) => {
		if (!this.isLoading && this.data && this.data.slotsEditor) {
			this.data.slotsEditor[idNewColumn] = [];
		}
	};
};

const $slotsEditorStore = new $SlotsEditorStore();

export { $slotsEditorStore };
