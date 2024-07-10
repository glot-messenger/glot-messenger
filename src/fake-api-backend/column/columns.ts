import { overwritingSettings, settingsAll } from '../editor';
import { addColumn } from '../slot';

let columnsAll = {
   // по ID редактора мессенджера сохраняется массив из его колонок
   // settingId: [{column}, {column}, {column}]
	'lxsx2xw3.0.6ee63ba756ca3.0.5461dfa3d3929-editor0d56afd1-b6c3-496e-a4e4-11ca8603cf3a': [
		{
			_id: 'lxsx2xw4.0.0e613a69cd867.0.9eba5789753e8-columnad793a11-27e5-438f-bce9-dee40ec7eec7',
			styles: {
				width: '4%'
			},
			settingId: 'lxsx2xw3.0.6ee63ba756ca3.0.5461dfa3d3929-editor0d56afd1-b6c3-496e-a4e4-11ca8603cf3a',
			accessStatusForChanges: true,
			slots: [
				'lxsx2xw4.0.500c9981af785.0.b10c88ff74437-slota96bb62d-8104-45a0-9b81-da4df340c560',
				'lxsx2xw4.0.1b5459f4a8704.0.c3ad9ed3ea35e-slot13acfca6-d563-4c02-9e8c-bfaa1ed2526f',
				'lxsx2xw4.0.85bb60ba8597a.0.105e30ac91dbd-slot93ba5418-5a75-4374-8027-1b0f32b7a290'
			]
		},
		{
			_id: 'lxvvxus8.0.ddeb35a9f114e.0.1d251c8ce140c-column0f8187cb-ac2b-435c-9ff9-cfe4bf9803fe',
			styles: {
				width: '12%'
			},
			settingId: 'lxsx2xw3.0.6ee63ba756ca3.0.5461dfa3d3929-editor0d56afd1-b6c3-496e-a4e4-11ca8603cf3a',
			accessStatusForChanges: true,
			slots: [
				'ly69am41.0.91a75ccfd924f.0.f251408a253d1-slotc3484fb7-d2be-42b4-9c44-4f53a039637f',
				'ly69am41.0.9c13a9ffcb08f.0.c2a56d59cf665-slotafa8a8f5-a506-4ac3-8f7b-2f3354580a51',
				'ly69am41.0.7d2382472ad31.0.f4746a97e5b4a-slot11d140f6-484d-499b-b6aa-4ff07fe7dd1a'
			]
		},
		{
			_id: 'ly7o6xqr.0.cbafd245052c1.0.cfb605130471c-column785359e4-6683-4bd6-94c0-9191fdef10bc',
			styles: {
				width: '15%'
			},
			settingId: 'lxsx2xw3.0.6ee63ba756ca3.0.5461dfa3d3929-editor0d56afd1-b6c3-496e-a4e4-11ca8603cf3a',
			accessStatusForChanges: false,
			slots: [
				'ly7o6xqr.0.b47b2160c5e81.0.cece5f6a068da-slote85c23ad-e786-4880-80a8-fddc37da013e',
				'ly7o6xqs.0.2a1ea2a157c38.0.a042d68924b24-slot6dc5bde2-9f6d-4603-8b55-dc99827ba789',
				'ly7o6xqs.0.cb801883b8535.0.69e3fe04420bb-slot1ae5e017-c286-4e2b-b5ca-3dcbb742a20b'
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

export function addColumnByIdEditor({ body }: any) {
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

		columnsAll[dataSave.settingId] = [
			...columnsAll[dataSave.settingId],
			dataSave
		];

		// ТАКЖЕ ДОБАВЛЯЕМ ID колонки в настройки редактора, чтобы одним методом сразу в двух местах обновить, а не в разных запросах
		const newSetting = {
			...settingsAll[0],
			columns: [
				...settingsAll[0].columns,
				dataSave._id
			]
		};

		overwritingSettings([newSetting]);

		// добавляем колонку в хранилище слотов
		addColumn(dataSave._id, []);

		// РАСКОММЕНТИРУЙ ДЛЯ ПОКАЗА ХРАНИЛИЩА БАЗЫ ДАННЫХ
      console.log('Backend: Store columns after save data settings. Add column!', columnsAll, settingsAll);

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

// ДЛЯ ВЗАИМОДЕЙСТВИЯ С ДРУГИМИ СТОРАМИ ==================================================================================
export function updateColumnsKeyForColumn(newValue, config) {
	const packColumns = columnsAll[config.settingsEditorId];

	let newColumn = {};

	const newColumns = packColumns.map((column) => {
		if (column._id === config.columnId) {
			const value = {
				...column,
				slots: newValue
			};

			newColumn = value;

			return value;
		}

		return column;
	});

	columnsAll[config.settingsEditorId] = newColumns;

	return newColumn;
};
