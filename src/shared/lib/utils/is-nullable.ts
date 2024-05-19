export function isNullable(value: unknown): value is null | undefined {
	if (typeof value === 'undefined') {
		return true;
	}

	if (typeof value === 'object' && !(value instanceof Object) && value === null) {
		return true;
	}

	return false;
};
