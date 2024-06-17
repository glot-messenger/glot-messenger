import { getUniqueId } from '../utils';

class ColumnModel {
	settingId: string;

	_id: string;

	slots: Array<any>;

	constructor({ settingId }: any) {
		this._id = getUniqueId('column');
		this.settingId = settingId;
		this.slots = [];
	};
};

export { ColumnModel };
