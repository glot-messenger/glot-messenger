import type { IValidator } from './interafaces';

import {
	IS_REQUIRED,
	MIN,
	MAX,
	NUMBER_REQUIRED,
	SYMBOL_REQUIRED,
	UPPER_CASE_ELEMENT_REQUIRED
} from '../../core';

import type {
	ISchemeForForm,
	IInstanceRules
} from '../../core';

class Validator implements IValidator {
	_applyRulesToData(keyD: string, nameR: keyof IInstanceRules, rule: IInstanceRules, data: Record<string, string>): boolean {
		let isError: boolean = false;

		const value: string = data[keyD];

		switch(nameR) {
			case IS_REQUIRED:
				isError = value.length === 0;
			break;
			case MIN:
				const m = rule[nameR];

				isError = !(m && value.length >= m.value);
			break;
			case MAX:
				const x = rule[nameR];

				isError = !(x && value.length <= x.value);
			break;
			case NUMBER_REQUIRED:
				isError = !(
					/[1234567890]/.test(value)
				);
			break;
			case SYMBOL_REQUIRED:
				isError = !(
					/[!?@#$%^&*]/.test(value)
				);
			break;
			case UPPER_CASE_ELEMENT_REQUIRED:
				isError = !(
					/[A-Z]/.test(value)
				);
			break;
			default:
				console.log(`Something went wrong. ${nameR} is not correct value!!! The developers are already working on restoring the correct operation of the application.`);
			break;
		}

		return isError;
	};

	validate<S extends ISchemeForForm, D extends Record<string, string>>(data: D, scheme: S): Record<PropertyKey, string> {
		const error: Record<PropertyKey, string> = {};

		const arrKeysData: string[] = Object.keys(scheme);

		for (let v = 0; v < arrKeysData.length; v++) {
			const keyData: string = arrKeysData[v]; // login  password

			const instanceRules: IInstanceRules = scheme[keyData];

			const arrNamesRules = Object.keys(instanceRules) as Array<keyof IInstanceRules>;

			for (let x = 0; x < arrNamesRules.length; x++) {
				const nameRule: keyof IInstanceRules = arrNamesRules[x]; // isRequired  min  max  numberRequired  symbolRequired  uppercaseElementRequired

				const result = this._applyRulesToData(keyData, nameRule, instanceRules, data);

				if (result) {
					const messageTxt: string = instanceRules[nameRule]?.message || '';

					if (messageTxt && error[keyData] === undefined) {
						error[keyData] = messageTxt;

						break;
					}
				}
			}
		}

		return error;
	};
};

const validator = new Validator();

export { validator };
