const slotsAll = {
   // по ID колонки мессенджера сохраняется массив из его слотов
   // columnId: [{slot}, {slot}, {slot}]
};

export function createSlotByIdColumn({ body }: any) {
   const dataSave = body.data;

   return new Promise((resolve, reject) => {
      if (dataSave === undefined || dataSave === null || (typeof dataSave !== 'object')) {
         reject({
            message: 'The dataSave for the /createSlotByIdColumn/ method must be passed!!!'
         });

         return;
      }

      if (!slotsAll[dataSave.columnId] || !(Array.isArray(slotsAll[dataSave.columnId]))) {
         slotsAll[dataSave.columnId] = [];
      }

      slotsAll[dataSave.columnId].push(dataSave);

      console.log('Backend: Store slots after save data slot!', slotsAll);

      //resolve(dataSave);

      reject({
         message: 'Error request slots'
      })
   });
};
