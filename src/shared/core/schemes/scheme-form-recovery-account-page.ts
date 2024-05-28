import type { ISchemeForForm } from './interafaces';

import {
	IS_REQUIRED,
	MIN,
	MAX
} from '../names-rules';

const schemeFormRecoveryAccountPage: ISchemeForForm = {
	login: {
		[IS_REQUIRED]: {
			message: 'Поле логин является обязательным к заполнению'
		},
		[MIN]: {
			message: 'Поле логин должно содержать не меньше 7 символов',
			value: 7
		},
		[MAX]: {
			message: 'Поле логин может содержать максимально 42 символа',
			value: 42
		}
	},
	secretPhrase: {
		[IS_REQUIRED]: {
			message: 'Поле для ввода секретной фразы является обязательным к заполнению'
		},
		[MIN]: {
			message: 'Поле для ввода секретной фразы должно содержать не меньше 72 символов',
			value: 72
		},
		[MAX]: {
			message: 'Поле для ввода секретной фразы может содержать максимально 300 символов',
			value: 300
		}
	}
};

export { schemeFormRecoveryAccountPage };
