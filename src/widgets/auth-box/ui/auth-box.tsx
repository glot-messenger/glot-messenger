import React from 'react';
import './auth-box-style.css';
import type { IAuthBoxProps } from './types';

const AuthBox: React.FC<IAuthBoxProps> = ({ children }) => {
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
