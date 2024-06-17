import { getUniqueId } from '../utils';

class SlotModel {
   _id: string;

   columnId: string;

   isEmpty: boolean;

   constructor({ columnId }: any) {
      this._id = getUniqueId('slot');
      this.columnId = columnId;
      this.isEmpty = true;
   };
};

export { SlotModel };
