import React from 'react';
import { LinkElement } from '../..';

const Logo: React.FC = () => {
	return (
		<LinkElement>
			<img src='/assets/icons/glot2.svg' />
			<span>GLOT</span>
		</LinkElement>
	);
};

export { Logo };
