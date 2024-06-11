export interface IParamsContainerForResultsEngines<T> {
	data: null | T;
	url: string;
	status: number;
	error: null | unknown;
};

export interface IContainerForResultsEngines<T> {
	data: null | T;
	message: string;
	isError: boolean;
	url: string;
	status: number;
	error: null | unknown;
};
