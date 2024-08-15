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

	async getColumns(config: any) {
		const containerData = await this.#dataProvider.get(config);

		if (containerData.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: 'Failure columns editor... An error occurred while receiving the editor columns.',
				data: {
					columnsEditor: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: 'Success columns editor! Successful receipt of the editor`s columns.',
			data: containerData.data
		});
	};

	async addNewColumn(config: any) {
		// ТУТ ДОЛЖЕН ОТРАБОТАТЬ МОЙ СПЕЦИАЛЬНЫЙ МОДУЛЬ, КОТОРЫЙ СМОТРИТ ВОЗМОЖНО ЛИ ДОБАВЛЕНИЕ НОВОЙ КОЛОНКИ В РЕДАКТОР, т.к. каждая колонка создается с определенным % ширины, а максимально у нас 100%, мы должны проверить, не превышается ли лимит
		// ТУТ ДОЛЖНА БЫТЬ ПРОВЕРКА МОЕГО СПЕЦИАЛЬНОГО РАЗРУЛИВАЮЩЕГО ИНТЕРФЕЙС КЛАССА, есть или нет возможности добавить колонку, т.к. колонке требуется 20% ширины пространства редактора
		const instanceColumnModel = factoryColumnModel(config);

		const containerData = await this.#dataProvider.set({ data: instanceColumnModel, ...config, configRequest: { concatUrl: ['column'] } });

		if (containerData.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: 'Failure columns editor... An error occurred while adding a new column to the editor.',
				data: {
					newColumnInEditor: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: 'Success columns editor! Adding a new column to the editor was successful.',
			data: containerData.data
		});
	};

	async updateColumnById(config: any) {
		const containerData = await this.#dataProvider.update({ ...config, configRequest: { concatUrl: ['column', `${config['columnId'] || '12324234234234324123'}`] } });

		if (containerData.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: 'Failure columns editor... An error occurred while updating the column.',
				data: {
					updatedColumn: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: 'Success columns editor! The column by id was updated successfully.',
			data: containerData.data
		});
	};

	//async getColumnsByIdEditorSettings(config: any) {
	//	const containerData = await this.#dataProvider.get(config);

	//	if (containerData.isError) {
	//		return factoryContainerForResultsSomeAsyncMethods({
	//			isError: true,
	//			message: containerData.message + ' Failure columns... Problems occurred when receiving columns by messenger id.',
	//			data: {
	//				columns: null
	//			}
	//		});
	//	}

	//	return factoryContainerForResultsSomeAsyncMethods({
	//		isError: false,
	//		message: containerData.message + ' Success columns! Columns by editor id have been received.',
	//		data: {
	//			columns: containerData.data
	//		}
	//	});
	//};

	//async updateColumnByIdEditorAndColumn(config: any) {
	//	const containerData = await this.#dataProvider.update(config);

	//	if (containerData.isError) {
	//		return factoryContainerForResultsSomeAsyncMethods({
	//			isError: true,
	//			message: containerData.message + ' Failure column... Column update failed...',
	//			data: null
	//		});
	//	}

	//	return factoryContainerForResultsSomeAsyncMethods({
	//		isError: false,
	//		message: 'Success column! Update column success...',
	//		data: containerData.data
	//	});
	//};

	//async createDefaultColumn(config: any) {
	//	const instanceColumnModel = factoryColumnModel(config);

	//	const containerResultSlots = await factorySlot().createDefaultSlots({ columnId: instanceColumnModel._id, quantityNewElements: 3 });

	//	if (containerResultSlots.isError) {
	//		return factoryContainerForResultsSomeAsyncMethods({
	//			isError: true,
	//			message: containerResultSlots.message + ' Failure column... Due to the fact that the request to create default slots failed, the default column was not created.',
	//			data: {
	//				...containerResultSlots.data,
	//				columns: null
	//			}
	//		});
	//	}

	//	containerResultSlots.data.slots[instanceColumnModel._id].forEach((slotModel: any) => {
	//		instanceColumnModel.slots.push(slotModel._id);
	//	});

	//	const containerDataSavedInstanceColumn = await this.#dataProvider.set({ data: instanceColumnModel, config: { method: 'createColumnByIdEditor' } });

	//	if (containerDataSavedInstanceColumn.isError) {
	//		//! Error
	//		// тут нужно подумать над ребилдом колонки, только колонки, т.к. у нас уже созданы для нее слоты
	//		// или откатить все в обратную и удалить уже созданные слоты под колонку, потому что на этом этапе они уже в бд висят и получается, будут засорять базу
	//		return factoryContainerForResultsSomeAsyncMethods({
	//			isError: true,
	//			message: containerResultSlots.message + ' Failure column... An error occurred when creating a default column.',
	//			data: {
	//				columns: null,
	//				slots: null
	//			}
	//		});
	//	}

	//	return factoryContainerForResultsSomeAsyncMethods({
	//		isError: false,
	//		message: containerResultSlots.message + ' Success column! The default column was successfully created.',
	//		data: {
	//			...containerResultSlots.data,
	//			columns: [instanceColumnModel]
	//		}
	//	});
	//};
};

export { Column };
