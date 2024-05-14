import React, { useContext } from 'react';
import './auth-box-style.css';
import type { IAuthBoxProps } from './interafaces';
import { ConditionAuthBoxContext } from '../../../entities/auth-box';

const AuthBox: React.FC<IAuthBoxProps> = ({ children }) => {
	const data = useContext(ConditionAuthBoxContext);

	console.log(data);
	return (
		<div className='auth-box'>
			<div className='auth-box__container box-auth'>
				<div className='box-auth__column'>
					{children}
				</div>
				<div className='box-auth__column'></div>
			</div>
		</div>
	);
};

export { AuthBox };
