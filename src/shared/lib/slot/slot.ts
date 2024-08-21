import { factorySlotDataProvider } from './slot-data-provider';
import { factorySlotModel } from './factory-slot-model';
import { factoryContainerForResultsSomeAsyncMethods } from '../container-for-results-some-async-methods';

// Singleton =======================================================================
let staticSlot: null | Slot = null;

class Slot {
   #dataProvider = factorySlotDataProvider();

   constructor() {
      if (staticSlot !== null) {
			return staticSlot;
		}

		staticSlot = this;
   };

	async getSlots(config: any) {
		const containerData = await this.#dataProvider.get(config);

		if (containerData.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: 'Failure slots editor... An error occurred while receiving the editor slots.',
				data: {
					slotsEditor: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: 'Success slots editor! Successful receipt of the editor`s slots.',
			data: containerData.data
		});
	};

	async addNewSlot(config: any) {
		const instanceSlotModel = factorySlotModel(config);

		const containerData = await this.#dataProvider.set({ data: instanceSlotModel, ...config, configRequest: { concatUrl: ['slot'] } });

		if (containerData.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: 'Failure slots editor... An error occurred when adding a new slot to the column.',
				data: {
					newSlotToTheColumnEditor: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: 'Success slots editor! Successfully adding a new slot to the editor column.',
			data: containerData.data
		});
	};

	async deleteSlot(config: any) {
		const containerData = await this.#dataProvider.delete({ ...config, configRequest: { concatUrl: ['slot', `${config['slotId'] || '12324234234234324123some-id'}`] } });

		if (containerData.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: 'Failure slots editor... An error occurred when deleting the editor slot.',
				data: {
					deletedSlot: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: 'Success slots editor! Deleting the slot you selected from the editor was successful.',
			data: containerData.data
		});
	};

	async updateSlotById(config: any) {
		const containerData = await this.#dataProvider.update({ ...config, configRequest: { concatUrl: ['slot', `${config['slotId'] || '12324234234234324123some-id'}`] } });

		if (containerData.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: 'Failure slots editor... An error occurred while updating the slot.',
				data: {
					updatedSlot: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: 'Success slots editor! The slot by id was updated successfully.',
			data: containerData.data
		});
	};

	async movingSlotById(config: any) {
		const containerData = await this.#dataProvider.operation({ ...config, configRequest: { concatUrl: ['slot', 'moving', `${config['slotId'] || '12324234234234324123some-id'}`] } });

		if (containerData.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: 'Failure slots editor... An error occurred when changing the slot position.',
				data: {
					movableSlot: null,
					newIndex: -1,
					newSlotsOrder: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: 'Success slots editor! The id slot has been successfully moved to a new location.',
			data: containerData.data
		});
	};
};

export { Slot };
