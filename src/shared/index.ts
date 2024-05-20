// config
import {
	configChildrensForFormSignInPage,
	configChildrensForFormSignUpPage
} from './config';
// core
import { authBoxData, textFieldEyeData, schemeFormSignInPage, schemeFormSignUpPage, HOME, AUTH, RECOVERY_ACCOUNT_SEGMENT, SIGN_IN_SEGMENT, SIGN_UP_SEGMENT } from './core';
// lib
import { validator, isNullable, isNotPrimitive, isContainsPropertiesTypeAndPropsInChild } from './lib';
// types
import type { MyChild, IInstanceWithKeyAndValue } from './types';
// ui
import { TextField, ButtonComponent, FormComponent } from './ui';

export {
	configChildrensForFormSignInPage,
	configChildrensForFormSignUpPage,
	authBoxData,
	textFieldEyeData,
	schemeFormSignInPage,
	schemeFormSignUpPage,
	validator,
	isNullable,
	isNotPrimitive,
	isContainsPropertiesTypeAndPropsInChild,
	TextField,
	ButtonComponent,
	FormComponent,
	HOME,
	AUTH,
	RECOVERY_ACCOUNT_SEGMENT,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT
};

export type {
	MyChild,
	IInstanceWithKeyAndValue
};
