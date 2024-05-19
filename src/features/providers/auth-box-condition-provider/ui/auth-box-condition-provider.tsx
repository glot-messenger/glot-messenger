import React from 'react';
import { ConditionAuthBoxContext } from '../../../../entities';
import type { IAuthBoxProviderProps, SegmentAuthPath } from './interafaces';
import { useLocation, useNavigate } from 'react-router-dom';
import type { NavigateFunction } from 'react-router-dom';
import { authBoxData, HOME } from '../../../../shared';

const AuthBoxConditionProvider: React.FC<IAuthBoxProviderProps> = ({ children }): React.ReactElement<any, any> | null => {
	const { pathname } = useLocation();

	const navigate: NavigateFunction = useNavigate();

	const pathsArr: string[] = pathname.slice(1).split('/');

	const segmentPath = pathsArr[1] as undefined | SegmentAuthPath;

	if (!segmentPath) {
		navigate(HOME);

		return null;
	}

	return (
		<ConditionAuthBoxContext.Provider value={authBoxData[segmentPath]}>
			{children}
		</ConditionAuthBoxContext.Provider>
	);
};

export { AuthBoxConditionProvider };
