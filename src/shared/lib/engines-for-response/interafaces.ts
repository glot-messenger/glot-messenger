export interface IResponseEngine {
   response: Response;
	jsonUnpacking(): Promise<any>;
	textUnpacking(): Promise<string>;
	arraybufferUnpacking(): Promise<ArrayBuffer>;
	blobUnpacking(): Promise<Blob>;
};
