import { ColumnModel } from './column-model';

function factoryColumnModel(config: any): ColumnModel {
	return new ColumnModel(config);
};

export { factoryColumnModel };
