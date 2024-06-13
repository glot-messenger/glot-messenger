import { factoryColumn } from '../column';

class EditorModel {
	userId: string;

	_id: string;

	storeColumns: Array<any>;

	constructor({ userId }) {
		this.userId = userId;
		this._id = `${Date.now()}-id-editor`;
		this.storeColumns = [];
	};

	//async addDefaultColumn() {
	//	await factoryColumn().createDefaultColumn({ settingId: this._id });
	//};
};

export { EditorModel };
