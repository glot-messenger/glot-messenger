import { BaseProvider } from '../../base-provider';

// Singleton ==============================================================================
let staticEditorDataProvider: null | EditorDataProvider = null;

class EditorDataProvider extends BaseProvider {
	constructor() {
		if (staticEditorDataProvider !== null) {
			return staticEditorDataProvider;
		}

		super();

		staticEditorDataProvider = this;
	};
};

export { EditorDataProvider };