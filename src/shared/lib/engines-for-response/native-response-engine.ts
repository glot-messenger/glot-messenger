import { ContainerForResultsEngines } from '../container-for-results-engines';
import type { IResponseEngineNative } from './interafaces';

class NativeResponseEngine implements IResponseEngineNative {
	containerResponse: ContainerForResultsEngines<any>;

	constructor(response: ContainerForResultsEngines<any>) {
		this.containerResponse = response;
	};

	async jsonUnpacking(): Promise<ContainerForResultsEngines<any>> {
		return this.containerResponse;
	};

	async nativeUnpacking(): Promise<ContainerForResultsEngines<any>> {
		return this.containerResponse;
	};

	async textUnpacking(): Promise<ContainerForResultsEngines<string>> {
		const value = JSON.stringify(this.containerResponse.data);

		return ({
			...this.containerResponse,
			data: value
		});
	};

	async arraybufferUnpacking(): Promise<ContainerForResultsEngines<ArrayBuffer>> {
		const value = new ArrayBuffer(1);

		return ({
			...this.containerResponse,
			data: value
		});
	};

	async blobUnpacking(): Promise<ContainerForResultsEngines<Blob>> {
		const value = new Blob();

		return ({
			...this.containerResponse,
			data: value
		});
	};
};

export type NativeResponseEngineClass = typeof NativeResponseEngine;

export { NativeResponseEngine };
