import type { IValidator } from './interafaces';
import { IS_REQUIRED, MIN, MAX, NUMBER_REQUIRED, SYMBOL_REQUIRED, UPPER_CASE_ELEMENT_REQUIRED } from '../../core';
import type { ISchemeFormSignInPage } from '../../core';

class Validator implements IValidator {
	#applyRulesToData(keyD: any, nameR: any, rule: any, data: any): boolean {
		let isError: boolean = false;

		switch(nameR) {
			case IS_REQUIRED:
				isError = data[keyD].length === 0;
			break;
			case MIN:
				isError = data[keyD].length < rule.value;
			break;
			case MAX:
				isError = data[keyD].length > rule.value;
			break;
			case NUMBER_REQUIRED:
				isError = !(
					/[1234567890]/.test(data[keyD])
				);
			break;
			case SYMBOL_REQUIRED:
				isError = !(
					/[!?@#$%^&*]/.test(data[keyD])
				);
			break;
			case UPPER_CASE_ELEMENT_REQUIRED:
				isError = !(
					/[A-Z]/.test(data[keyD])
				);
			break;
			default:
				console.log(`Something went wrong. ${nameR} is not correct value!!! The developers are already working on restoring the correct operation of the application.`);
			break;
		}

		return isError;
	};

	validate<S extends ISchemeFormSignInPage, D extends Record<keyof S, unknown>>(data: D, scheme: S): Map<keyof D, string> {
		const error: Map<keyof D, string> = new Map();

		const arrayKeysData = Object.keys(scheme) as Array<keyof S>;

		for (let m = 0; m < arrayKeysData.length; m++) {
			const keyData = arrayKeysData[m];

			const instanceRules = scheme[keyData];

			const arrayNamesRules = Object.keys(instanceRules) as Array<keyof typeof instanceRules>;

			for (let i = 0; i < arrayNamesRules.length; i++) {
				const nameRule = arrayNamesRules[i];

				const result = this.#applyRulesToData(keyData, nameRule, scheme[keyData][nameRule], data);

				if (result && error.get(keyData) === undefined) {
					error.set(keyData, scheme[keyData][nameRule].message);

					break;
				}
			}
		}

		return error;
	};
};

const validator = new Validator();

export { validator };