const slotsAll = {
   // по ID колонки мессенджера сохраняется массив из его слотов
   // columnId: [{slot}, {slot}, {slot}]
	'lxsx2xw4.0.0e613a69cd867.0.9eba5789753e8-columnad793a11-27e5-438f-bce9-dee40ec7eec7': [
		{
			_id: 'lxsx2xw4.0.500c9981af785.0.b10c88ff74437-slota96bb62d-8104-45a0-9b81-da4df340c560',
			columnId: 'lxsx2xw4.0.0e613a69cd867.0.9eba5789753e8-columnad793a11-27e5-438f-bce9-dee40ec7eec7',
			isEmpty: false,
			nameWidget: 'logo-glot'
		},
		{
			_id: 'lxsx2xw4.0.1b5459f4a8704.0.c3ad9ed3ea35e-slot13acfca6-d563-4c02-9e8c-bfaa1ed2526f',
			columnId: 'lxsx2xw4.0.0e613a69cd867.0.9eba5789753e8-columnad793a11-27e5-438f-bce9-dee40ec7eec7',
			isEmpty: true,
			nameWidget: ''
		},
		{
			_id: 'lxsx2xw4.0.85bb60ba8597a.0.105e30ac91dbd-slot93ba5418-5a75-4374-8027-1b0f32b7a290',
			columnId: 'lxsx2xw4.0.0e613a69cd867.0.9eba5789753e8-columnad793a11-27e5-438f-bce9-dee40ec7eec7',
			isEmpty: true,
			nameWidget: ''
		}
	]
};

export function fetchSlotsByIdsColumns({ body }: any) {
	const { columnsIds } = body;

	const result = {};

	return new Promise((resolve, reject) => {
		if (!columnsIds || !Array.isArray(columnsIds)) {
			reject({
				message: 'The columnsIds for the /fetchSlotsByIdsColumns/ method must be passed!!! columnsIds has been Array!'
			});

			return;
		}

		for (let m = 0; m < columnsIds.length; m++) {
			const columnId = columnsIds[m];

			const value = slotsAll[columnId];

			if (value) {
				result[columnId] = value;

			} else {
				result[columnId] = [];
			}
		}

		resolve(result);
	});
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

		// РАСКОММЕНТИРУЙ ДЛЯ ПОКАЗА ХРАНИЛИЩА БАЗЫ ДАННЫХ
      //console.log('Backend: Store slots after save data slot!', slotsAll);

      resolve(dataSave);
   });
};
