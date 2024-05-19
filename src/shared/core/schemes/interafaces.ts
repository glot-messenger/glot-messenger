interface ILiteRule {
	message: string;
};

type IMiddleRule = ILiteRule & { value: number };

interface ISchemeFormLoginField extends Object {
	isRequired: ILiteRule;
	min: IMiddleRule;
	max: IMiddleRule;
};

interface ISchemeFormPasswordField extends Object {
	isRequired: ILiteRule;
	min: IMiddleRule;
	max: IMiddleRule;
	numberRequired: ILiteRule;
	symbolRequired: ILiteRule;
	uppercaseElementRequired: ILiteRule;
};

export interface ISchemeFormSignInPage extends Object {
	login: ISchemeFormLoginField;
	password: ISchemeFormPasswordField;
};
