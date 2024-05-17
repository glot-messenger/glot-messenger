interface ILiteRule {
	message: string;
};

type IMiddleRule = ILiteRule & { value: number };

interface ISchemeFormLoginField {
	isRequired: ILiteRule;
	min: IMiddleRule;
	max: IMiddleRule;
};

interface ISchemeFormPasswordField {
	isRequired: ILiteRule;
	min: IMiddleRule;
	max: IMiddleRule;
	numberRequired: ILiteRule;
	symbolRequired: ILiteRule;
	uppercaseElementRequired: ILiteRule;
};

export interface ISchemeFormSignInPage {
	login: ISchemeFormLoginField;
	password: ISchemeFormPasswordField;
};
