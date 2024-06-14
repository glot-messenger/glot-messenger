class ColumnModel {
	settingId: string;

	_id: string;

	slots: Array<any>;

	constructor({ settingId }: any) {
		this._id = `${Date.now()}-column-id`;
		this.settingId = settingId;
		this.slots = [];
	};
};

export { ColumnModel };
