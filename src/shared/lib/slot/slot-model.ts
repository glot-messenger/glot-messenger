class SlotModel {
   _id: string;

   columnId: string;

   isEmpty: boolean;

   constructor({ columnId }: any) {
      this._id = `${Date.now()}-id-slot`;
      this.columnId = columnId;
      this.isEmpty = true;
   };
};

export { SlotModel };
