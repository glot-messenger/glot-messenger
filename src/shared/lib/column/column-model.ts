import { getUniqueId } from '../utils';

class ColumnModel {
	settingId: string;

	_id: string;

	slots: Array<any>;

	styles: any;

	constructor({ settingId }: any) {
		this._id = getUniqueId('column');
		this.settingId = settingId;
		this.slots = [];
		this.styles = {
			width: '10%',
			top: '0%',
			left: '0%'
		}
	};
};

export { ColumnModel };
