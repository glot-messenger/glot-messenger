import {
   fetchSettingsEditorForUserById,
   createSettingsEditorForUser
} from './editor';

import { createColumnByIdEditor } from './column';

const fakeApiBackend: any = {
   editor: {
      fetchSettingsEditorForUserById,
      createSettingsEditorForUser
   },
   column: {
      createColumnByIdEditor
   }
};

export { fakeApiBackend };
