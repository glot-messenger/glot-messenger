function getCorrectTimeForDateMs(valueMilliseconds: number): string {
	const dateInstance: Date = new Date(valueMilliseconds);

	const month: number = dateInstance.getMonth() + 1;

	const serialNumberDay: number = dateInstance.getDate();

	const result: string = `${serialNumberDay < 10 ? `0${serialNumberDay}` : serialNumberDay}.${month < 10 ? `0${month}` : month}.${dateInstance.getFullYear()}`;

	return result;
};

export { getCorrectTimeForDateMs };
