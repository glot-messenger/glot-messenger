import { EditorModel } from './editor-model';

function factoryEditorModel(configEditor) {
	return new EditorModel(configEditor);
};

export { factoryEditorModel };
