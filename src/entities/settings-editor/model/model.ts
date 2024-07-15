import { makeAutoObservable } from 'mobx';
import { factoryEditor } from '../../../shared';

class SettingsEditor {
	data = {};

	isLoading: boolean = true;

	#service = factoryEditor();

	constructor() {
		makeAutoObservable(this);
	};

	async getSettingsEditorAction(config: any) { // { userId: '1719229880595-user-id' }
		try {
			const containerData = this.#service.getSettings(config);

		} catch (err) {

		}
	};
};

const settingsEditor = new SettingsEditor();

export {
	settingsEditor
};
