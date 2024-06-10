import { fakeApiBackend } from '../../../fake-api-backend';

function fakeEngine(url: string, params: RequestInit): Promise<any> {
	return new Promise(async (resolve, reject) => {
		try {
			const urlCorrectValue = url !== '/' && url[url.length - 1] === '/' ?
				url.slice(0, -1) :
				url;

			const segmentsPath = urlCorrectValue.split('/').slice(1);

			const result = await fakeApiBackend[segmentsPath[0]][segmentsPath[1]](params);

			resolve({
				data: result
			});
		} catch(err) {
			reject(err);
		}
	});
};

export { fakeEngine };
