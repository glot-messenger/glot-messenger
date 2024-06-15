import { Column } from './column';

function factoryColumn(): Column {
	return new Column();
};

export { factoryColumn };
