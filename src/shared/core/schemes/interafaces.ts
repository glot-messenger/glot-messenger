interface IMessageRule {
	message: string;
};

interface IValueRule {
	value: number;
};

interface ITargetValue {
	targetValue: string;
};

export interface IInstanceRules {
	isRequired?: IMessageRule;
	min?: IMessageRule & IValueRule;
	max?: IMessageRule & IValueRule;
	numberRequired?: IMessageRule;
	symbolRequired?: IMessageRule;
	uppercaseElementRequired?: IMessageRule;
	isIdentical?: IMessageRule & ITargetValue;
};

export interface ISchemeForForm {
	[key: string]: IInstanceRules;
};
