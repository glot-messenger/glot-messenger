const columnsAll = {
   // по ID редактора мессенджера сохраняется массив из его колонок
   // settingId: [{column}, {column}, {column}]
	'lxsx2xw3.0.6ee63ba756ca3.0.5461dfa3d3929-editor0d56afd1-b6c3-496e-a4e4-11ca8603cf3a': [
		{
			_id: 'lxsx2xw4.0.0e613a69cd867.0.9eba5789753e8-columnad793a11-27e5-438f-bce9-dee40ec7eec7',
			styles: {
				width: '10%',
				top: '0%',
				left: '0%'
			},
			settingId: 'lxsx2xw3.0.6ee63ba756ca3.0.5461dfa3d3929-editor0d56afd1-b6c3-496e-a4e4-11ca8603cf3a',
			accessStatusForChanges: true,
			slots: [
				'lxsx2xw4.0.500c9981af785.0.b10c88ff74437-slota96bb62d-8104-45a0-9b81-da4df340c560',
				'lxsx2xw4.0.1b5459f4a8704.0.c3ad9ed3ea35e-slot13acfca6-d563-4c02-9e8c-bfaa1ed2526f',
				'lxsx2xw4.0.85bb60ba8597a.0.105e30ac91dbd-slot93ba5418-5a75-4374-8027-1b0f32b7a290'
			]
		}
	]
};

export function updateColumnByIdEditorAndColumn({ body }: any) {
	const { data } = body;

	return new Promise((resolve, reject) => {
		if (typeof data !== 'object' || !(data?.settingId) || !(data?.columnId)) {
			reject({
				message: 'The data for the /updateColumnByIdEditorAndColumn/ method must be passed!!! Data must have the settingId and columnId properties!!!'
			});

			return;
		}

		const columns = columnsAll[data.settingId];

		if (!Array.isArray(columns)) {
			reject({
				message: 'There are no columns for such an editor id'
			});

			return;
		}

		const columnByIdIndex = columns.findIndex((columnDataDb) => {
			return (columnDataDb._id === data.columnId);
		});

		if (columnByIdIndex === -1) {
			reject({
				message: 'The column for this id was not found!'
			});

			return;
		}

		const newColumn = {
			...columns[columnByIdIndex],
			...data.value
		};

		columns[columnByIdIndex] = newColumn;

		resolve(newColumn);
	});
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

		// РАСКОММЕНТИРУЙ ДЛЯ ПОКАЗА ХРАНИЛИЩА БАЗЫ ДАННЫХ
      // console.log('Backend: Store columns after save data settings!', columnsAll);

      resolve(dataSave);
   });
};

export function fetchColumnsByIdEditor({ body }: any) {
	const { settingId } = body;

	return new Promise((resolve, reject) => {
		if (settingId === undefined || settingId === null) {
			reject({
				message: 'The settingId for the /fetchColumnsByIdEditor/ method must be passed!!!'
			});

			return;
		}

		const columns = columnsAll[settingId];

		if (Array.isArray(columns) && (columns.length !== 0)) {
			resolve(columns);

			return;
		}

		resolve([]);
	});
};
