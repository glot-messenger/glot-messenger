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

	static override request = BaseProvider.request.concatUrl('editor');

	override async get() {
		const request = EditorDataProvider.request.post.nativeFormat.concatUrl('fetchSettingsEditorForUserById').body({
			userId: '1718025993466'
		});

		const valueSetting = await request.create();

		return valueSetting.nativeUnpacking();
	};

	override async update() {

	};
};

export { EditorDataProvider };
