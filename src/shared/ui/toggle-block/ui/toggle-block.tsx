import React, { useRef, useEffect, useState } from 'react';
import './toggle-block-style.css';
import type { IToggleBlockProps } from './interafaces';

const ToggleBlock: React.FC<IToggleBlockProps> = ({ text, children, classes, isShown }) => {
	const classesElement: string = 'toggle-block__content ' + classes;

	const classesParent: string = 'toggle-block ' + (isShown ? 'active' : 'no-active');

	const content = text ? text : children;

	const contentElement = useRef<HTMLDivElement>(null);

	const [contentHeight, setContentHeight] = useState<number>(0);

	useEffect(() => {
		if (contentElement.current) {
			if (isShown) {
				setContentHeight(contentElement.current.scrollHeight);

			} else {
				setContentHeight(0);
			}
		}
	}, [isShown]);

	return (
		<div className={classesParent} style={{ height: contentHeight }}>
			<div className='toggle-block__container'>
				<div className={classesElement} ref={contentElement}>
					{content}
				</div>
			</div>
		</div>
	);
};

export { ToggleBlock };
