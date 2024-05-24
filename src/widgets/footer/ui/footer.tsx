import React from 'react';
import './footer-style.css';

import {
	HrElement,
	Logo,
	configForLogoInFooter
} from '../../../shared';

import { GratitudeBlock } from './gratitude-block';

const Footer: React.FC = () => {
	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<div className='footer__container'>
					<Logo {...configForLogoInFooter} />
					<GratitudeBlock />
					<HrElement />
					FOOTE APPLICATION
				</div>
			</div>
		</footer>
	);
};

export { Footer };
