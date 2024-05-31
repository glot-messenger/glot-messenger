interface IIcon {
	name: string;
	alt: string;
	titleHover: string;
	path?: string;
};

export interface ITextFieldEyeData {
	"eye-view": {
		icon: IIcon;
	};
	"eye-hide": {
		icon: IIcon;
	};
};
