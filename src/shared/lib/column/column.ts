import { factoryColumnModel } from './factory-column-model';
import { factoryColumnDataProvider } from './column-data-provider';
import { factorySlot } from '../slot';
import { factoryContainerForResultsSomeAsyncMethods } from '../container-for-results-some-async-methods';

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

	async getColumnsByIdEditorSettings(config: any) {
		const containerData = await this.#dataProvider.get(config);

		if (containerData.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: containerData.message + ' Failure columns... Problems occurred when receiving columns by messenger id.',
				data: {
					...containerData.data,
					columns: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: containerData.message + ' Success columns! Columns by editor id have been received.',
			data: {
				columns: containerData.data
			}
		});
	};

	async createDefaultColumn(config: any) {
		const instanceColumnModel = factoryColumnModel(config);

		const containerResultSlots = await factorySlot().createDefaultSlots({ columnId: instanceColumnModel._id, quantityNewElements: 3 });

		if (containerResultSlots.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: containerResultSlots.message + ' Failure column... Due to the fact that the request to create default slots failed, the default column was not created.',
				data: {
					...containerResultSlots.data,
					columns: null
				}
			});
		}

		containerResultSlots.data.slots.forEach((slotModel: any) => {
			instanceColumnModel.slots.push(slotModel._id);
		});

		const containerDataSavedInstanceColumn = await this.#dataProvider.set(instanceColumnModel);

		if (containerDataSavedInstanceColumn.isError) {
			//! Error
			// тут нужно подумать над ребилдом колонки, только колонки, т.к. у нас уже созданы для нее слоты
			// или откатить все в обратную и удалить уже созданные слоты под колонку, потому что на этом этапе они уже в бд висят и получается, будут засорять базу
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: containerResultSlots.message + ' Failure column... An error occurred when creating a default column.',
				data: {
					columns: null,
					slots: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: containerResultSlots.message + ' Success column! The default column was successfully created.',
			data: {
				...containerResultSlots.data,
				columns: [instanceColumnModel]
			}
		});
	};
};

export { Column };
