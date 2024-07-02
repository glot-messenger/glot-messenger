export interface IButtonWithDynamicBackgroundProps {
	textBtn?: string;
	children?: React.ReactNode;
	type: 'submit' | 'reset' | 'button';
	titleHover: string;
	typeElement: string;
	classes: string;
	segmentEvent: string;
};
