import { ColumnModel } from './column-model';

function factoryColumnModel(config) {
	return new ColumnModel(config);
};

export { factoryColumnModel };
