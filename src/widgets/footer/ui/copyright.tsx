import React from 'react';
import './copyright-style.css';
import { configForCopyrightInFooter } from '../config';

const Copyright: React.FC = () => {
	const date: Date = new Date();

	const currentYear: number = date.getFullYear();

	const { text } = configForCopyrightInFooter;

	const textValue: string = text.replace('{{value}}', `${currentYear}`);

	return (
		<div className='copyright'>
			<div className='copyright__container'>
				<p className='copyright__text'>{textValue}</p>
			</div>
		</div>
	);
};

export { Copyright };
