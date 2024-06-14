import { factoryColumnModel } from './factory-column-model';
import { factoryColumnDataProvider } from './column-data-provider';

// Singleton =======================================================================
let staticColumn: null | Column = null;

class Column {
	#dataProvider = factoryColumnDataProvider();

	constructor() {
		if (staticColumn !== null) {
			return staticColumn;
	 }

	 staticColumn = this;
	};

	async createDefaultColumn(config: any) {
		const instanceColumn = factoryColumnModel(config);

		console.log(instanceColumn, "COLUMN", config);
		// Требуется добавить в колонку два слота, их id и асинхронно сохранить
		// API

		console.log(this, 'THIS');

		const containerDataSavedInstanceColumn = await this.#dataProvider.set(instanceColumn);

		return containerDataSavedInstanceColumn;
	};
};

export { Column };
