import { ContainerForResultsEngines } from '../container-for-results-engines';

export interface IResponseEngineFetch {
  containerResponse: ContainerForResultsEngines<Response>;
	jsonUnpacking(): Promise<ContainerForResultsEngines<any>>;
	nativeUnpacking(): Promise<ContainerForResultsEngines<Response>>;
	textUnpacking(): Promise<ContainerForResultsEngines<string | null>>;
	arraybufferUnpacking(): Promise<ContainerForResultsEngines<ArrayBuffer | null>>;
	blobUnpacking(): Promise<ContainerForResultsEngines<Blob | null>>;
};

export interface IResponseEngineNative {
	containerResponse: ContainerForResultsEngines<any>;
	jsonUnpacking(): Promise<ContainerForResultsEngines<any>>;
	nativeUnpacking(): Promise<ContainerForResultsEngines<any>>;
	textUnpacking(): Promise<ContainerForResultsEngines<string>>;
	arraybufferUnpacking(): Promise<ContainerForResultsEngines<ArrayBuffer>>;
	blobUnpacking(): Promise<ContainerForResultsEngines<Blob>>;
};
