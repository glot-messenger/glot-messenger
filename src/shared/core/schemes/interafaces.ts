interface IMessageRule {
	message: string;
};

interface IValueRule {
	value: number;
};

export interface IInstanceRules {
	isRequired?: IMessageRule;
	min?: IMessageRule & IValueRule;
	max?: IMessageRule & IValueRule;
	numberRequired?: IMessageRule;
	symbolRequired?: IMessageRule;
	uppercaseElementRequired?: IMessageRule;
};

export interface ISchemeForForm {
	[key: string]: IInstanceRules;
};
