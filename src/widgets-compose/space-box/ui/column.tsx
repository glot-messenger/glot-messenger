import React from 'react';
import './column-style.css';
import type { IColumnProps } from './interafaces';

const Column: React.FC<IColumnProps> = ({ idColumn }) => {
	return (
		<div className='column'></div>
	);
};

export { Column };
