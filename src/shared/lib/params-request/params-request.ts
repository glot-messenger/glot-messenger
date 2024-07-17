class ParamsRequest implements RequestInit {
	method: string;

	body?: BodyInit | null;

	headers?: Record<string, string>;

	constructor({ method, body, headers }: { method: string; body?: BodyInit | null; headers?: Record<string, string> } ) {
		this.method = method;

		if (headers) {
			this.headers = headers;
		}

		if (body) {
			this.body = body;
		}
	};
};

export { ParamsRequest };