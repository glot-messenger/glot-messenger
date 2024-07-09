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

	async movingDownSlot(config: any, slots: any) {
		const packOfSlotsForCurrentColumn = slots[config.columnId];

		const index = packOfSlotsForCurrentColumn.findIndex((slot) => {
			return slot._id === config.slotId;
		});

		const configMethods = {
			'index + 1': 'movingDownSlotByIdColumnAndIdSlot'
		};

		if ((index !== -1) && (index !== packOfSlotsForCurrentColumn.length - 1)) {
			const containerColumnModel = await this.#dataProvider.set({ data: null, config: { method: configMethods[config.position], payload: config } });
		}
	};

	async getSlotsByIdsColumns(config: any) {
		const constainerData = await this.#dataProvider.get(config);

		if (constainerData.isError) {
			return factoryContainerForResultsSomeAsyncMethods({
				isError: true,
				message: constainerData.message + ' Failure slots... An error occurred while receiving slots.',
				data: {
					slots: null
				}
			});
		}

		return factoryContainerForResultsSomeAsyncMethods({
			isError: false,
			message: 'Success slots! Successful receipt of slots.',
			data: {
				slots: constainerData.data
			}
		});
	};

   async createDefaultSlots({ columnId, quantityNewElements }: any) {
      const arrayContainersModelsSlots = [];

      const arrayModelsSlots = [];

      for (let m = 0; m < quantityNewElements; m++) {
         const instanceSlotModel = factorySlotModel({ columnId });

         const containerDataSavedInstanceSlot = await this.#dataProvider.set({ data: instanceSlotModel, config: { method: 'createSlotByIdColumn' } });

         arrayContainersModelsSlots.push(containerDataSavedInstanceSlot);

         arrayModelsSlots.push(containerDataSavedInstanceSlot.data);
      }

      const isNotErrorsContainers = arrayContainersModelsSlots.every((container) => {
         return container.isError !== true;
      });

      if (isNotErrorsContainers) {
         return factoryContainerForResultsSomeAsyncMethods({ isError: false, message: 'Success slots! Successful creation of default column slots.', data: { slots: { [columnId]: arrayModelsSlots } } });
      }

      //! Error
      // Откатить успешно созданные слоты в бд, если, например, 1 успешно создался, а с остальными произошла ошибка, произошел разрыв соединения интернета

      return factoryContainerForResultsSomeAsyncMethods({ isError: true, message: 'Failure slots... An error occurred when creating default slots for the column.', data: { slots: null } });
   };
};

export { Slot };
