import type {
	IAuthBoxData,
	IIcon
} from './defaults-data';


export interface IAuthBoxDataOnPages {
   'sign-in': IAuthBoxData;
   'sign-up': IAuthBoxData;
   'recovery-account': IAuthBoxData;
};

export interface ITextFieldEyeData {
	"eye-view": {
		icon: IIcon;
	};
	"eye-hide": {
		icon: IIcon;
	};
};
