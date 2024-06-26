import React, { useContext } from 'react';
import './column-style.css';
import type { IColumnProps } from './interafaces';
import { EditorContext } from '../../../entities';
import { Slot } from './slot';

import {
	ButtonDots,
	ButtonLock
} from '../../../shared';

const Column: React.FC<IColumnProps> = ({ data }) => {
	const { slots: slotsStoreForColumns } = useContext(EditorContext);

	const { styles, slots: slotsIds, settingId, _id, accessStatusForChanges } = data;

	const arraySlots = slotsStoreForColumns[_id];

	return (
		<div className='column' style={styles}>
			<div className='column__head'>
				<ButtonLock flagStatus={accessStatusForChanges} data={_id} />
				<ButtonDots />
			</div>
			<div className='column__container-slots'>
				{arraySlots.map((slotData) => {
					return (
						<Slot key={slotData._id} data={slotData} />
					);
				})}
			</div>
		</div>
	);
};

export { Column };
