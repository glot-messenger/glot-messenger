import { EditorModel } from './editor-model';

function factoryEditorModel(config: any): EditorModel {
	return new EditorModel(config);
};

export { factoryEditorModel };
