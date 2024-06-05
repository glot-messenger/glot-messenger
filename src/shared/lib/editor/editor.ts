import { factoryEditorDataProvider } from './editor-data-provider';

// Singleton =======================================================================
let staticEditor: null | Editor = null;

class Editor {
   storeColumns = new Map();

   dataProvider = factoryEditorDataProvider();

   constructor() {
      if (staticEditor !== null) {
         return staticEditor;
      }

      staticEditor = this;
   };


};

export { Editor };
