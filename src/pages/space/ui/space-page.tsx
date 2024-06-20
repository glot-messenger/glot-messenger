import React from 'react';
import './space-page-style.css';
import { SpaceBox } from '../../../widgets-compose';

const SpacePage: React.FC = () => {
	return (
		<div className='space'>
			<div className='space__container'>
				<SpaceBox />
			</div>
		</div>
	);
};

export { SpacePage };
