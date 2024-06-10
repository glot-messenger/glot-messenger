const settingsAll: any = [
   
];

const defaultSetting = {
   _id: 'default-setting-id-1718025020096',
   userId: 'default-user-id-1718025037816',
   columns: [
      {
         _id: 'default-column-id-1718025049272',
         settingId: 'default-setting-id-1718025020096',
         slots: [
            {
               _id: 'default-slot-id-1718025080104',
               columnId: 'default-column-id-1718025049272',
               isEmpty: true
            },
            {
               _id: 'default-slot-id-1718025314648',
               columnId: 'default-column-id-1718025049272',
               isEmpty: true
            }
         ]
      }
   ]
};

function fetchSettingsEditorForUserById({ body }: any) {
   const userId = body.userId;

   return new Promise((resolve, reject) => {
      if (userId === undefined || userId === null || userId === '') {
         reject({
            message: 'The user ID for the /fetchSettingsEditorForUserById/ method must be passed!!!'
         });

         return;
      }

      const settingForUser = settingsAll.find((settingData: any, index: number) => {
         if (settingData.userId === userId) {
            return settingData;
         }

         return null;
      });

      if (!settingForUser) {
         resolve(defaultSetting);

         return;
      }

      resolve(settingForUser);
   });
};

export { fetchSettingsEditorForUserById };
