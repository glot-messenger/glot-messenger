import React from 'react';
import type { ISlotProps } from './interafaces';
import './slot-style.css';
import { SlotEmpty } from '../../../widgets';

const Slot: React.FC<ISlotProps> = ({ data }) => {
	const { isEmpty, columnId, _id } = data;

	// Тут буду разводить виджеты if else
	return (
		<div className='slot'>
			<div className='slot__container'>
				<SlotEmpty {...data} />
			</div>
		</div>
	);
};

export { Slot };
