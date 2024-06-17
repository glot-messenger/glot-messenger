import { getUniqueId } from '../utils';

class EditorModel {
	userId: string;

	_id: string;

	columns: Array<any>;

	constructor({ userId }: any) {
		this.userId = userId;
		this._id = getUniqueId('editor');
		this.columns = [];
	};
};

export { EditorModel };
