import { factoryColumnModel } from './factory-column-model';
import { factoryColumnDataProvider } from './column-data-provider';
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
		//! ТУТ ДОЛЖЕН ОТРАБОТАТЬ МОЙ СПЕЦИАЛЬНЫЙ МОДУЛЬ, КОТОРЫЙ СМОТРИТ ВОЗМОЖНО ЛИ ДОБАВЛЕНИЕ НОВОЙ КОЛОНКИ В РЕДАКТОР, т.к. каждая колонка создается с определенным % ширины, а максимально у нас 100%, мы должны проверить, не превышается ли лимит
		//! ТУТ ДОЛЖНА БЫТЬ ПРОВЕРКА МОЕГО СПЕЦИАЛЬНОГО РАЗРУЛИВАЮЩЕГО ИНТЕРФЕЙС КЛАССА, есть или нет возможности добавить колонку, т.к. колонке требуется 20% ширины пространства редактора
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

	async deleteColumn(config: any) {
		const containerData = await this.#dataProvider.delete({ ...config, configRequest: { concatUrl: ['column', `${config['columnId'] || '12324234234234324123some-id'}`] } });

		if (containerData.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: 'Failure columns editor... An error occurred when deleting the editor column.',
				data: {
					deletedColumn: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: 'Success columns editor! Deleting the column you selected from the editor was successful.',
			data: containerData.data
		});
	};

	async updateColumnById(config: any) {
		const containerData = await this.#dataProvider.update({ ...config, configRequest: { concatUrl: ['column', `${config['columnId'] || '12324234234234324123some-id'}`] } });

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

	async movingColumnById(config: any) {
		const containerData = await this.#dataProvider.operation({ ...config, configRequest: { concatUrl: ['column', 'moving', `${config['columnId'] || '12324234234234324123some-id'}`] } });

		if (containerData.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: 'Failure columns editor... An error occurred when changing the column position.',
				data: {
					movableColumn: null,
					newIndex: -1,
					newColumnsOrder: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: 'Success columns editor! The id column has been successfully moved to a new location.',
			data: containerData.data
		});
	};
};

export { Column };
