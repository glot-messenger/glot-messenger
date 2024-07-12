import { makeAutoObservable } from 'mobx';

class SettingsEditor {
	data = {};

	constructor() {
		makeAutoObservable(this);
	};
};

const settingsEditor = new SettingsEditor();

export {
	settingsEditor
};
