import React, { useContext } from 'react';
import './auth-box-style.css';
import type { IAuthBoxProps } from './interafaces';
import { ConditionAuthBoxContext } from '../../../entities';
import { GroupLinks } from '../../../bricks';
import { AuthBoxInfo } from './auth-box-info';

const AuthBox: React.FC<IAuthBoxProps> = ({ children }) => {
	const { title, subTitle, titleHover, phrase, subPhrase, icon, links } = useContext(ConditionAuthBoxContext);

	return (
		<div className='auth-box'>
			<div className='auth-box__wrapper box-auth'>
				<div className='box-auth__container'>
					<div className='box-auth__column'>
						<div className='box-auth__head head-box-auth' title={titleHover}>
							<h1 className='head-box-auth__title'>{title}</h1>
							<p className='head-box-auth__sub-title'>{subTitle}</p>
						</div>
						{children}
					</div>
					<div className='box-auth__column'>
						<AuthBoxInfo classesParent='box-auth' {...icon} title={phrase} subTitle={subPhrase} />
						<GroupLinks linksGroup={links} />
					</div>
				</div>
			</div>
		</div>
	);
};

export { AuthBox };
