import React from 'react';
import './footer-style.css';

import {
	HrElement,
	Logo,
	configForLogoInFooter
} from '../../../shared';

import { GratitudeBlock } from './gratitude-block';
import { SupportEmailBlock } from './support-email-block';
import { Copyright } from './copyright';

const Footer: React.FC = () => {
	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<div className='footer__container'>
					<Logo {...configForLogoInFooter} />
					<div className='footer__box-elements'>
						<div className='footer__column'>
							<GratitudeBlock />
						</div>
						<div className='footer__column'>
							<SupportEmailBlock />
							<Copyright />
						</div>
					</div>
					<HrElement />
				</div>
			</div>
		</footer>
	);
};

export { Footer };
