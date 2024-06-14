class EditorModel {
	userId: string;

	_id: string;

	columns: Array<any>;

	constructor({ userId }: any) {
		this.userId = userId;
		this._id = `${Date.now()}-id-editor`;
		this.columns = [];
	};
};

export { EditorModel };
