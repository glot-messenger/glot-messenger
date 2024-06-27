import {
   fetchSettingsEditorForUserById,
   createSettingsEditorForUser
} from './editor';

import {
	createColumnByIdEditor,
	fetchColumnsByIdEditor,
	updateColumnByIdEditorAndColumn
} from './column';

import {
	createSlotByIdColumn,
	fetchSlotsByIdsColumns
} from './slot';

const fakeApiBackend: any = {
   editor: {
      fetchSettingsEditorForUserById,
      createSettingsEditorForUser
   },
   column: {
      createColumnByIdEditor,
		fetchColumnsByIdEditor,
		updateColumnByIdEditorAndColumn
   },
   slot: {
      createSlotByIdColumn,
		fetchSlotsByIdsColumns
   }
};

export { fakeApiBackend };
