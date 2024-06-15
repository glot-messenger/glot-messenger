const columnsAll = {
   // по ID редактора мессенджера сохраняется массив из его колонок
   // settingId: [{column}, {column}, {column}]
};

export function createColumnByIdEditor({ body }: any) {
   const dataSave = body.data;

   return new Promise((resolve, reject) => {
      if (dataSave === undefined || dataSave === null || (typeof dataSave !== 'object')) {
         reject({
            message: 'The dataSave for the /createColumnByIdEditor/ method must be passed!!!'
         });

         return;
      }

      if (!columnsAll[dataSave.settingId] || !(Array.isArray(columnsAll[dataSave.settingId]))) {
         columnsAll[dataSave.settingId] = [];
      }

      columnsAll[dataSave.settingId].push(dataSave);

      console.log('Store columns after save data settings!', columnsAll);

      resolve(dataSave);
   });
};
