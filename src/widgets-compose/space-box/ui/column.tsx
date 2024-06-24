import React from 'react';
import './column-style.css';
import type { IColumnProps } from './interafaces';

const Column: React.FC<IColumnProps> = ({ data }) => {
	console.log(data, 'COLUMN');

	return (
		<div className='column' style={data.styles}>

		</div>
	);
};

export { Column };
