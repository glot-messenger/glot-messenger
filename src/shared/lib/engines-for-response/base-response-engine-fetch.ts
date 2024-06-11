import type { IResponseEngineFetch } from './interafaces';
import { ContainerForResultsEngines } from '../container-for-results-engines';

class BaseResponseEngineFetch implements IResponseEngineFetch {
	containerResponse: ContainerForResultsEngines<Response>;

	constructor(response: ContainerForResultsEngines<Response>) {
		this.containerResponse = response;
	};

	// async decoding(): Promise<Response> {
	// 	console.log('Some data decoding...', this.response);

	// 	return this.response;
	// };

	async jsonUnpacking(): Promise<ContainerForResultsEngines<any>> {
		return ({
			...this.containerResponse,
			data: await this.containerResponse.data?.json()
		});
	};

	async textUnpacking(): Promise<ContainerForResultsEngines<string | null>> {
		const value = await this.containerResponse.data?.text();

		return ({
			...this.containerResponse,
			data: value ? value : null
		});
	};

	async arraybufferUnpacking(): Promise<ContainerForResultsEngines<ArrayBuffer | null>> {
		const value = await this.containerResponse.data?.arrayBuffer();

		return ({
			...this.containerResponse,
			data: value ? value : null
		});
	};

	async blobUnpacking(): Promise<ContainerForResultsEngines<Blob | null>> {
		const value = await this.containerResponse.data?.blob();

		return ({
			...this.containerResponse,
			data: value ? value : null
		});
	};

	async nativeUnpacking(): Promise<ContainerForResultsEngines<Response>> {
		return this.containerResponse;
	};

	// async formDataUnpacking(): Promise<Response> {
	// 	console.log("доступно для результата fetch");

	// 	return this.response;
	// };

	// async documentUnpacking(): Promise<Response> {
	// 	console.log("доступно только для XMLHttpRequest");

	// 	return this.response;
	// };
};

export type BaseResponseEngineFetchClass = typeof BaseResponseEngineFetch;

export { BaseResponseEngineFetch };
