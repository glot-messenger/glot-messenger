import { BaseProvider } from '../../base-provider';
import { editorRequestModule } from './requests-editor-data-provider';

// Singleton ==============================================================================
let staticEditorDataProvider: null | EditorDataProvider = null;

class EditorDataProvider extends BaseProvider {
	static override request = editorRequestModule;

	constructor() {
		if (staticEditorDataProvider !== null) {
			return staticEditorDataProvider;
		}

		super();

		staticEditorDataProvider = this;
	};

	override async get() {
		const request = EditorDataProvider.request.post.nativeFormat.concatUrl('fetchSettingsEditorForUserById').body({
			userId: '1718025993466'
		});

		const valueSetting = await request.create();

		return valueSetting.nativeUnpacking();
	};

	override async set(instanceEditor: any) {
		const request = EditorDataProvider.request.post.nativeFormat.concatUrl('createSettingsEditorForUser').body({
			data: instanceEditor
		});

		const valueSetting = await request.create();

		return valueSetting.nativeUnpacking();
	};

	override async update() {

	};
};

export { EditorDataProvider };
