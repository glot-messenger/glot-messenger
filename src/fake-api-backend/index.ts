import {
   fetchSettingsEditorForUserById,
   createSettingsEditorForUser
} from './editor';

import {
	createColumnByIdEditor,
	fetchColumnsByIdEditor,
	updateColumnByIdEditorAndColumn,
	addColumnByIdEditor
} from './column';

import {
	createSlotByIdColumn,
	fetchSlotsByIdsColumns,
	movingDownSlotByIdColumnAndIdSlot,
	simpleSlotUpgrade
} from './slot';

const fakeApiBackend: any = {
   editor: {
      fetchSettingsEditorForUserById,
      createSettingsEditorForUser
   },
   column: {
      createColumnByIdEditor,
		fetchColumnsByIdEditor,
		updateColumnByIdEditorAndColumn,
		addColumnByIdEditor
   },
   slot: {
      createSlotByIdColumn,
		fetchSlotsByIdsColumns,
		movingDownSlotByIdColumnAndIdSlot,
		simpleSlotUpgrade
   }
};

export { fakeApiBackend };
