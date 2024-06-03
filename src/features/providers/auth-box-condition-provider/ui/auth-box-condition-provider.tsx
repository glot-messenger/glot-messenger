import React from 'react';
import { ConditionAuthBoxContext } from '../../../../entities';

import type {
	IAuthBoxProviderProps,
	SegmentAuthPath
} from './interafaces';

import {
	useLocation,
	Navigate
} from 'react-router-dom';

import { HOME } from '../../../../shared';

import { authBoxData } from '../../../../widgets';

const AuthBoxConditionProvider: React.FC<IAuthBoxProviderProps> = ({ children }): React.ReactElement<any, any> | null => {
	const { pathname } = useLocation();

	const pathsArr: string[] = pathname.slice(1).split('/');

	const segmentPath = pathsArr[1] as undefined | SegmentAuthPath;

	if (!segmentPath) {
		return <Navigate to={HOME} />
	}

	return (
		<ConditionAuthBoxContext.Provider value={authBoxData[segmentPath]}>
			{children}
		</ConditionAuthBoxContext.Provider>
	);
};

export { AuthBoxConditionProvider };
