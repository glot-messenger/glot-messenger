export interface IDataFormComponent {
	[key: string]: string | boolean;
};

export interface IDataFormInOnSubmit {
	data: IDataFormComponent;
};

export interface IFormComponentProps<S = unknown, D = unknown> {
	children: React.ReactNode;
	data: D;
	onSubmit: (payload: IDataFormInOnSubmit) => void;
	schemeForValidator: S;
};
