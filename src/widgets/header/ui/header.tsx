import React from 'react';
import './header-style.css';
import { InformationAboutCountryService } from './information-about-country-service';

const Header: React.FC = () => {
	return (
		<header className='header'>
			<div className='header__container _container'>
				<InformationAboutCountryService />
			</div>
		</header>
	);
};

export { Header };
