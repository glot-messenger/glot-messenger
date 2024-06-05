import { EditorDataProvider } from './editor-data-provider';

function factoryEditorDataProvider() {
	return new EditorDataProvider();
};

export { factoryEditorDataProvider };
