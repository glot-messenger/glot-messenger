import {
   fetchSettingsEditorForUserById,
   createSettingsEditorForUser
} from './editor';

import { createColumnByIdEditor } from './column';

import { createSlotByIdColumn } from './slot';

const fakeApiBackend: any = {
   editor: {
      fetchSettingsEditorForUserById,
      createSettingsEditorForUser
   },
   column: {
      createColumnByIdEditor
   },
   slot: {
      createSlotByIdColumn
   }
};

export { fakeApiBackend };
