function fakeEngine(url: string, params: RequestInit): Promise<Response> {
	return new Promise(async (resolve, reject) => {
		try {
			// console.log(url);
			// console.log(params);
			// console.log('В движке');
			resolve({
				data: []
			});
		} catch(err) {
			reject(err);
		}
	});
};

export { fakeEngine };
