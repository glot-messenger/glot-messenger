export function getUniqueId(namespace?: string): string {
	const random1: string = Math.random().toString(16);

	const random2: string = Math.random().toString(16);

	const dateValue: string = Date.now().toString(36);

	let value: string = `${dateValue}.${random1}.${random2}`;

	if (namespace) {
		value += `-${namespace}`;
	}

	if (crypto !== undefined && crypto !== null) {
		value += crypto.randomUUID();
	}

	return value;
};
