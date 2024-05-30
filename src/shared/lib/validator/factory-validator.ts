import { Validator } from './validator';
import { factoryMultiton } from '../multiton';
import { KEY_FOR_MULTITON_VALIDATOR } from './core';

function factoryValidator(): Validator {
	return new Validator();
};

// Регистрируем Singleton в Multiton
factoryMultiton().set(KEY_FOR_MULTITON_VALIDATOR, factoryValidator());
