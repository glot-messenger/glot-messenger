export interface IFormComponentProps<T = unknown> {
	children: React.ReactNode;
	data: any;
	onSubmit: (data: any) => void;
	schemeForValidator: T;
};
