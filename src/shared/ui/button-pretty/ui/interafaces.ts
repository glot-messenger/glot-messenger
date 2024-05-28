export interface IPrettyButtonProps {
	children?: React.ReactNode;
	titleHover: string;
	type: 'submit' | 'reset' | 'button';
	typeElement: 'button';
	textBtn?: string;
	classes: string;
};