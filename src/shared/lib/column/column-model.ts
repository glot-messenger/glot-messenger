import { getUniqueId } from '../utils';

class ColumnModel {
	settingId: string;

	_id: string;

	slots: Array<any>;

	styles: any;

	accessStatusForChanges: boolean;

	constructor({ settingId }: any) {
		this._id = getUniqueId('column');
		this.settingId = settingId;
		this.accessStatusForChanges = true;
		this.slots = [];
		this.styles = {
			width: '10%'
		}
	};
};

export { ColumnModel };
