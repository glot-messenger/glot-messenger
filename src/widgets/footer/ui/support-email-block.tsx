import React from 'react';
import './support-email-block-style.css';

import {
	LinkElement,
	configForSupportEmailBlockInFooter
} from '../../../shared';

const SupportEmailBlock: React.FC = () => {
	const { text, link } = configForSupportEmailBlockInFooter;

	return (
		<div className='support-block-email'>
			<div className='support-block-email__container'>
				<span className='support-block-email__message'>{text}</span>
				<LinkElement text={link.text} to={link.path} titleHover={link.titleHover} classesValue='support-block-email__email-target' typeElement='nativeLink' />
			</div>
		</div>
	);
};

export { SupportEmailBlock };
