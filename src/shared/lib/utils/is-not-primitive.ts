export function isNotPrimitive(value: unknown): value is object | Function {
	if (typeof value === 'function') {
		return true;
	}

	if (typeof value === 'object' && value instanceof Object && value !== null) {
		return true;
	}

	return false;
};
