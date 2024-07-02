import React from 'react';
import type { ISlotProps } from './interafaces';
import './slot-style.css';
import { SlotEmpty } from '../../../widgets';

const Slot: React.FC<ISlotProps> = ({ data }) => {
	const { isEmpty, columnId, _id } = data;

	// Тут буду разводить виджеты if else, если пустой слот, то SLotEmpty иначе в зависимости от названия виджета
	return (
		<div className='slot'>
			<div className='slot__container'>
				<SlotEmpty {...data} />
			</div>
		</div>
	);
};

export { Slot };
