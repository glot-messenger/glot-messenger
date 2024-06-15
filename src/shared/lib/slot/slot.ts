import { factorySlotDataProvider } from './slot-data-provider';
import { factorySlotModel } from './factory-slot-model';

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

   async createDefaultSlots({ columnId, quantityNewElements }: any) {
      const arrayPromisesModelsSlots = [];

      for (let m = 0; m < quantityNewElements; m++) {
         const instanceSlotModel = factorySlotModel({ columnId });

         const containerDataSavedInstanceSlot = await this.#dataProvider.set(instanceSlotModel);

         arrayPromisesModelsSlots.push(containerDataSavedInstanceSlot);
      }

      return Promise.all(arrayPromisesModelsSlots);
   };
};

export { Slot };
