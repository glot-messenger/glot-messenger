import {
   fetchSettingsEditorForUserById,
   createSettingsEditorForUser
} from './editor';

import {
	createColumnByIdEditor,
	fetchColumnsByIdEditor
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
		fetchColumnsByIdEditor
   },
   slot: {
      createSlotByIdColumn,
		fetchSlotsByIdsColumns
   }
};

export { fakeApiBackend };
