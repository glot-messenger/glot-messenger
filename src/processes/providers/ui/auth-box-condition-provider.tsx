import React from 'react';
import { ConditionAuthBoxContext } from '../../../entities/auth-box';
import type { IAuthBoxProviderProps, SegmentAuthPath } from './interafaces';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { authBoxData } from '../../../shared/core';

const AuthBoxConditionProvider: React.FC<IAuthBoxProviderProps> = ({ children }): any => {
	const { pathname } = useLocation();

	const navigate: NavigateFunction = useNavigate();

	const pathsArr: string[] = pathname.slice(1).split('/');

	const segmentPath = pathsArr[1] as undefined | SegmentAuthPath;

	if (!segmentPath) {
		navigate('/');

		return;
	}

	return (
		<ConditionAuthBoxContext.Provider value={authBoxData[segmentPath]}>
			{children}
		</ConditionAuthBoxContext.Provider>
	);
};

export { AuthBoxConditionProvider };
