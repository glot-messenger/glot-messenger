import { createContext } from 'react';
import type { IAuthBoxData } from './interfaces';

const defaultValue = {
	title: '',
	subTitle: '',
	titleDescription: ''
};

export const ConditionAuthBoxContext = createContext<IAuthBoxData>(defaultValue);
