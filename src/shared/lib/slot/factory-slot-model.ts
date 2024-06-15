import { SlotModel } from './slot-model';

function factorySlotModel(config: any): SlotModel {
   return new SlotModel(config);
};

export { factorySlotModel };
