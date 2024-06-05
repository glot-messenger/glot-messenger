import type {
	ISchemeForForm,
	IInstanceRules
} from '../../core';

export interface IValidator {
	_applyRulesToData(keyD: string, nameR: keyof IInstanceRules, rule: IInstanceRules, data: Record<string, string>): boolean;
	validate<D extends Record<string, string>, S extends ISchemeForForm>(data: D, scheme: S): Record<PropertyKey, string>;
};
