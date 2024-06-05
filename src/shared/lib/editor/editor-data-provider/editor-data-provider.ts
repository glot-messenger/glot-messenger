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
		// id авторизованного пользователя, для которого тащится его настройка интерфейса
		console.dir('EditorDataProvider', EditorDataProvider.request.strategyRequestFN);
		

		// const requestModule = EditorDataProvider.request.get.concatUrl('17176177027211717617807573').nativeFormat;

		// const result = await requestModule.create();

		// console.log(result, 'EditorDataProvider');

		//return result;
	};

	override async update() {

	};
};

//console.log('URL', BaseProvider.request.url);


export { EditorDataProvider };