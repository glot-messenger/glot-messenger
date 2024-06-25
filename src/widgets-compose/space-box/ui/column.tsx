import React, { useContext } from 'react';
import './column-style.css';
import type { IColumnProps } from './interafaces';
import { EditorContext } from '../../../entities';

const Column: React.FC<IColumnProps> = ({ data }) => {
	const { slots, modules } = useContext(EditorContext);

	const { styles, slots: slotsIds, settingId, _id } = data;

	console.log('slots', slots);

	return (
		<div className='column' style={styles}>
			
		</div>
	);
};

export { Column };
