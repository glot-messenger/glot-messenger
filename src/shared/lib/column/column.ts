import { factoryColumnModel } from './factory-column-model';

// Singleton =======================================================================
let staticColumn: null | Column = null;

class Column {
	constructor() {
		if (staticColumn !== null) {
			return staticColumn;
	 }

	 staticColumn = this;
	};

	createDefaultColumn(config) {
		const column = factoryColumnModel(config);

		console.log(column, "COLUMN", config);
		// Требуется добавить в колонку два слота, их id и асинхронно сохранить
		// API

		return column;
	};
};

export { Column };
