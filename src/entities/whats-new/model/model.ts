import { makeAutoObservable, runInAction } from 'mobx';
import { factoryWhatsNew } from '../../../shared';

class $WhatsNewStore {
	// { whatsNew: [] }
	data: any = null;

	isLoading: boolean = true;

	isError: boolean = false;

	messageError: string = '';

	service = factoryWhatsNew();

	// =======================================

	constructor() {
		makeAutoObservable(this);
	};

	getWhatsNewAction = async(): Promise<void> => {
		runInAction(() => {
			this.isLoading = true;
			this.isError = false;
			this.messageError = '';
			this.data = null;
		});

		try {
			const { message, isError, data } = await this.service.getWhatsNew();

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

const $whatsNewStore = new $WhatsNewStore();

export { $whatsNewStore };
