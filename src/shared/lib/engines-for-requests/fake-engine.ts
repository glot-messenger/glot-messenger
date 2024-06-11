import { fakeApiBackend } from '../../../fake-api-backend';

import {
	factoryContainerForResultsEngines,
	ContainerForResultsEngines
} from '../container-for-results-engines';

function fakeEngine(url: string, params: RequestInit): Promise<ContainerForResultsEngines<any>> {
	return new Promise(async (resolve, reject) => {
		try {
			const urlCorrectValue = url !== '/' && url[url.length - 1] === '/' ?
				url.slice(0, -1) :
				url;

			const segmentsPath = urlCorrectValue.split('/').slice(1);

			const result = await fakeApiBackend[segmentsPath[0]][segmentsPath[1]](params);

			resolve(factoryContainerForResultsEngines<any>({
				data: result,
				url,
				status: 200,
				error: null
			}));

		} catch(err: unknown) {
			console.log('ERROR: fakeEngine', err);

			reject(factoryContainerForResultsEngines<null>({
				data: null,
				url,
				status: 400,
				error: err
			}));
		}
	});
};

export { fakeEngine };
