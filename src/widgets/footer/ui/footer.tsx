import React from 'react';
import './footer-style.css';
import { configForLogoInFooter } from '../config';
import { GratitudeBlock } from './gratitude-block';
import { SupportEmailBlock } from './support-email-block';
import { Copyright } from './copyright';
import { HrElement } from '../../../shared';

import {
	JoinSocialNetwork,
	Logo
} from '../../../bricks';

const Footer: React.FC = () => {
	return (
		<footer className='footer'>
			<div className='footer__wrapper _container'>
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
					<JoinSocialNetwork classesParent='footer' />
				</div>
			</div>
		</footer>
	);
};

export { Footer };
