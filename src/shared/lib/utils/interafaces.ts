import type { ISchemeForForm, IInstanceRules } from '../../core';

export interface IValidator {
	_applyRulesToData(keyD: string, nameR: keyof IInstanceRules, rule: IInstanceRules, data: Record<string, string>): boolean;
	validate<S extends ISchemeForForm, D extends Record<string, string>>(data: D, scheme: S): Record<PropertyKey, string>;
};
