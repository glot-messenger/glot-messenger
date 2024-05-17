// core
import authBoxData from './core/auth-box-data.json';
// core/schemes
import { schemeFormSignInPage } from './core/schemes/scheme-form-sign-in-page';
// ui
import { TextField } from './ui/text-field/text-field';
import { ButtonComponent } from './ui/button/button-component';
import { FormComponent } from './ui/form/form-component';
// lib/utils
import { isNotPrimitive } from './lib/utils/is-not-primitive';
import { isNullable } from './lib/utils/is-nullable';
// types
import type {
	IStylePadding,
	IStyleBorder,
	MyChild,
	IInstanceWithKeyAndValue
} from './types/auxiliary';
// config
import { configChildrensForFormSignInPage } from './config/config-childrens-for-forms-on-pages';

export {
	authBoxData,
	TextField,
	ButtonComponent,
	FormComponent,
	isNotPrimitive,
	isNullable,
	configChildrensForFormSignInPage,
	schemeFormSignInPage
};

export type {
	IStylePadding,
	IStyleBorder,
	MyChild,
	IInstanceWithKeyAndValue
};
