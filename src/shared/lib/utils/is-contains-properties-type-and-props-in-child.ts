import type { ReactNode } from 'react';
import type { MyChild } from '../../types';

export function isContainsPropertiesTypeAndPropsInChild(childInstance: MyChild): childInstance is Exclude<MyChild, Iterable<ReactNode>> {
	if (childInstance.hasOwnProperty('type') && childInstance.hasOwnProperty('props')) {
		return true;
	}

	return false;
};


