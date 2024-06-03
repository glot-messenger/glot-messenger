import type { IAuthBoxData } from '../config';

export interface IAuthBoxDataOnPages {
	'sign-in': IAuthBoxData;
	'sign-up': IAuthBoxData;
	'recovery-account': IAuthBoxData;
};