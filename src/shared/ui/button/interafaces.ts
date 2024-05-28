export interface IButtonComponentProps {
	textBtn?: string;
	type: 'submit' | 'reset' | 'button';
	titleHover: string;
	typeElement: 'button';
	isDisabled?: boolean;
	classes: string;
	children?: React.ReactNode;
};
