import {
	isNullable,
	isNotPrimitive,
	isContainsPropertiesTypeAndPropsInChild
} from './utils';

import {
	KEY_FOR_MULTITON_VALIDATOR,
	factoryValidator
} from './validator';

import { factoryMultiton } from './multiton';

export {
	KEY_FOR_MULTITON_VALIDATOR,
	isNullable,
	isNotPrimitive,
	isContainsPropertiesTypeAndPropsInChild,
	factoryMultiton,
	factoryValidator
};
