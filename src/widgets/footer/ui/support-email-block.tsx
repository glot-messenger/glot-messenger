import React from 'react';
import './support-email-block-style.css';
import { LinkElement } from '../../../shared';

const SupportEmailBlock: React.FC = () => {
	return (
		<div className='support-block-email'>
			<div className='support-block-email__container'>
				<span className='support-block-email__message'>Со всеми предложениями, связанными с работой мессенджера, обращайтесь на почту:</span>
				<LinkElement text='glot.messenger@yandex.ru' to='mailto:glot.messenger@yandex.ru' titleHover='Нажмите, что написать нам на почту' classesValue='support-block-email__email-target' typeElement='nativeLink' />
			</div>
		</div>
	);
};

export { SupportEmailBlock };
