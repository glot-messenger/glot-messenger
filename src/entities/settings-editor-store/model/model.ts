import { makeAutoObservable, runInAction } from 'mobx';
import { factoryEditor } from '../../../shared';

class $SettingsEditorStore {
	data = null;

	isLoading: boolean = true;

	isError: boolean = false;

	messageError: string = '';

	service = factoryEditor();

	constructor() {
		makeAutoObservable(this);
	};

	getSettingsEditorAction = async(config: any): Promise<void> => { // пользователь, который есть в базе { userId: '1719229880595-user-id' }
		runInAction(() => {
			this.isLoading = true;
			this.isError = false;
			this.messageError = '';
			this.data = null;
		});

		try {
			if (typeof config !== 'object' || (typeof config === 'object' && !config.hasOwnProperty('userId'))) {
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
};

const $settingsEditorStore = new $SettingsEditorStore();

export { $settingsEditorStore };
