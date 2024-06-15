import { factoryColumnModel } from './factory-column-model';
import { factoryColumnDataProvider } from './column-data-provider';
import { factorySlot } from '../slot';

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
		const instanceColumnModel = factoryColumnModel(config);

		const arrayContainersDataSlots = await factorySlot().createDefaultSlots({ columnId: instanceColumnModel._id, quantityNewElements: 3 });

		arrayContainersDataSlots.forEach((container) => {
			instanceColumnModel.slots.push(container.data._id);
		});

		const containerDataSavedInstanceColumn = await this.#dataProvider.set(instanceColumnModel);

		return containerDataSavedInstanceColumn;
	};
};

export { Column };
