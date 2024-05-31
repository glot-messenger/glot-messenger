import { Validator } from './validator';

function factoryValidator(): Validator {
	return new Validator();
};

export { factoryValidator };
