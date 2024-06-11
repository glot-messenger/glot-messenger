import {
	factoryContainerForResultsEngines,
	ContainerForResultsEngines
} from '../container-for-results-engines';

function fetchEngine(url: string, params: RequestInit): Promise<ContainerForResultsEngines<Response>> {
	return new Promise(async (resolve, reject) => {
		try {
			const responce: Response = await fetch(url, params);

			resolve(factoryContainerForResultsEngines<Response>({
				data: responce,
				url,
				status: responce.status,
				error: null
			}));

		} catch(err: unknown) {
			console.log('ERROR: fetchEngine', err);

			reject(factoryContainerForResultsEngines<null>({
				data: null,
				url,
				status: 400,
				error: err
			}));
		}
	});
};

export { fetchEngine };
