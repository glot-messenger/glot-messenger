import { ColumnModel } from './column-model';

function factoryColumnModel(config: any) {
	return new ColumnModel(config);
};

export { factoryColumnModel };
