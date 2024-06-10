import {
	factoryContainerForResultsEngines,
	ContainerForResultsEngines
} from '../container-for-results-engines';

function fetchEngine(url: string, params: RequestInit): Promise<ContainerForResultsEngines> {
	return new Promise(async (resolve, reject) => {
		try {
			const responce: Response = await fetch(url, params);

			resolve(responce);

		} catch(err) {
			console.log('ERROR: fetchEngine', err);

			reject(factoryContainerForResultsEngines({
				data: null,
				url,
				status: 400,
				error: err
			}));
		}
	});
};

export { fetchEngine };
