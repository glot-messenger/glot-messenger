export interface IConfigLogoGlot {
	button: {
		type: 'submit' | 'reset' | 'button';
		titleHover: string;
	};
	icon: {
		name: string;
		alt: string;
	};
};

export interface IConfigLogoGlotBtnArrows {
	button: {
		typeElement: 'button';
		type: 'submit' | 'reset' | 'button';
		titleHover: string;
		classes: string;
		segmentEvent: string;
	};
};

export interface IConfigSocialNetworkBlock {
	title: string;
	subTitle: string;
	text: string;
	icon: {
		name: string;
		alt: string;
	}
};
