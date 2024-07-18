import { makeAutoObservable, runInAction } from 'mobx';
import { factorySlot } from '../../../shared';

class $SlotsEditorStore {
	data = null;

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

		console.log(config);

		try {
			if (typeof config !== 'object' || (typeof config === 'object' && (!config.hasOwnProperty('columnsIds') || !Array.isArray(config['columnsIds'])))) {
				throw new Error('Failure slots editor... The config must have the property *columnsIds*...');
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
};

const $slotsEditorStore = new $SlotsEditorStore();

export { $slotsEditorStore };
