import type {
	IParamsContainerForResultsEngines,
	IContainerForResultsEngines
} from './interafaces';

class ContainerForResultsEngines implements IContainerForResultsEngines {
	data: null | any;

	message: string;

	isError: boolean;

	url: string;

	status: number;

	error: null | unknown;

	constructor({ data, url, status, error }: IParamsContainerForResultsEngines) {
		this.data = data;
		if (error !== null) {
			this.message = 'The request did not take place, an error occurred.';
			this.isError = true;

		} else {
			this.message = 'Successfully completed request.';
			this.isError = false;
		}
		this.url = url;
		this.status = status;
		this.error = error;
	};
};

export { ContainerForResultsEngines };
