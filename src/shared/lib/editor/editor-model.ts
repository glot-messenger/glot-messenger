import { getUniqueId } from '../utils';

class EditorModel {
	userId: string;

	_id: string;

	columns: Array<any>;

	timeCreatedInMilliseconds: number;

	constructor({ userId }: any) {
		this.userId = userId;
		this._id = getUniqueId('editor');
		this.columns = [];
		this.timeCreatedInMilliseconds = Date.now();
	};
};

export { EditorModel };
