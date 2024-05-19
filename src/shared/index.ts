// config
import { configChildrensForFormSignInPage } from './config';
// core
import { authBoxData, textFieldEyeData, schemeFormSignInPage, HOME, AUTH, RECOVERY_ACCOUNT_SEGMENT, SIGN_IN_SEGMENT, SIGN_UP_SEGMENT } from './core';
import type { ISchemeFormSignInPage } from './core';
// lib
import { validator, isNullable, isNotPrimitive, isContainsPropertiesTypeAndPropsInChild } from './lib';
// types
import type { MyChild, IInstanceWithKeyAndValue } from './types';
// ui
import { TextField, ButtonComponent, FormComponent } from './ui';

export {
	configChildrensForFormSignInPage,
	authBoxData,
	textFieldEyeData,
	schemeFormSignInPage,
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
	ISchemeFormSignInPage,
	MyChild,
	IInstanceWithKeyAndValue
};
