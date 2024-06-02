import React from 'react';
import './toggle-block-style.css';
import type { IToggleBlockProps } from './interafaces';

const ToggleBlock: React.FC<IToggleBlockProps> = ({ text, children, classes, isShown }) => {
	const classesElement: string = 'toggle-block__content ' + classes;

	const content = text ? text : children;

	const classesParent: string = 'toggle-block ' + (isShown ? 'active' : 'no-active');

	return (
		<div className={classesParent}>
			<div className='toggle-block__container'>
				<div className={classesElement}>
					{content}
				</div>
			</div>
		</div>
	);
};

export { ToggleBlock };
