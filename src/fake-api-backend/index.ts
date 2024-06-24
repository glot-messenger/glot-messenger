import {
   fetchSettingsEditorForUserById,
   createSettingsEditorForUser
} from './editor';

import {
	createColumnByIdEditor,
	fetchColumnsByIdEditor
} from './column';

import { createSlotByIdColumn } from './slot';

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
      createSlotByIdColumn
   }
};

export { fakeApiBackend };
