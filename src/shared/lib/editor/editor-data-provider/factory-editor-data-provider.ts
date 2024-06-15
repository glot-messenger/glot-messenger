import { EditorDataProvider } from './editor-data-provider';

function factoryEditorDataProvider(): EditorDataProvider {
	return new EditorDataProvider();
};

export { factoryEditorDataProvider };
