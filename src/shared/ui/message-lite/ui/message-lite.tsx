import React from 'react';
import './message-lite-style.css';
import type { IMessageLiteProps } from './interafaces';
import { configForMessageLite } from '../config';
import { config } from '../../../../shared';

const MessageLite: React.FC<IMessageLiteProps> = ({ text }) => {
	const { icon } = configForMessageLite;

	const { name, alt, titleHover } = icon;

	return (
		<div className='message-lite'>
			<div className='message-lite__container' title={titleHover}>
				<img className='message-lite__icon' src={`${config.endPointForStatics}assets/icons/logo/${name}`} alt={alt} />
				<p className='message-lite__text'>{text}</p>
			</div>
		</div>
	);
};

export { MessageLite };
