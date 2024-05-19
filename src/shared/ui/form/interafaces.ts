export interface IFormComponentProps<S = unknown, D = unknown> {
	children: React.ReactNode;
	data: D;
	onSubmit: (data: D) => void;
	schemeForValidator: S;
};
