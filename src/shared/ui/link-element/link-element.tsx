import React from 'react';
import './link-element-style.css';
import { Link } from 'react-router-dom';
import type { ILinkElementProps } from './interafaces';

const LinkElement: React.FC<ILinkElementProps> = ({ to, titleHover, classesValue, children, text, typeElement }) => {
	const classes: string = 'link' + (classesValue ? ` ${classesValue}` : '');

	const contentChildren = children ? children : text;

	return (
		typeElement === 'Link' ?
			<Link to={to} title={titleHover} className={classes}>
				{contentChildren}
			</Link> :
			<a href={to} title={titleHover} className={classes}>
				{contentChildren}
			</a>
	);
};

export { LinkElement };
