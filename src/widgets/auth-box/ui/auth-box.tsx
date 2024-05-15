import React, { useContext } from 'react';
import './auth-box-style.css';
import type { IAuthBoxProps } from './interafaces';
import { ConditionAuthBoxContext } from '../../../entities/auth-box';
import { Link } from 'react-router-dom';

const AuthBox: React.FC<IAuthBoxProps> = ({ children }) => {
	const { title, subTitle, titleHover, phrase, subPhrase, icon } = useContext(ConditionAuthBoxContext);

	const { name, alt, path, titleHover: iconTitleHover } = icon;

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
						<div className='box-auth__info info-box-auth'>
							<Link to={path} title={iconTitleHover} className='info-box-auth__link-icon'>
								<img className='info-box-auth__icon' src={`/assets/icons/${name}`} alt={alt} />
							</Link>
							<h2 className='info-box-auth__title-phrase'>{phrase}</h2>
							<p className='info-box-auth__sub-phrase'>{subPhrase}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { AuthBox };
