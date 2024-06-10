export interface IParamsContainerForResultsEngines {
	data: null | any;
	url: string;
	status: number;
	error: null | unknown;
};

export interface IContainerForResultsEngines {
	data: null | any;
	message: string;
	isError: boolean;
	url: string;
	status: number;
	error: null | unknown;
};
