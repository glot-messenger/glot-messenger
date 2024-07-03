import React, { useContext, useEffect, useState } from 'react';
import './column-style.css';
import type { IColumnProps } from './interafaces';
import { Slot } from './slot';
import { Modal } from '../../../widgets';
import { configContextMenuColumn } from '../config';
import type { IElementContextMenu } from '../../../shared';

import {
	EditorContext,
	EventEmitterContext
} from '../../../entities';

import {
	ButtonDots,
	ButtonLock,
	COLUMN_EVENT_SEGMENT,
	BUTTON_DOTS_EVENT_CLICK,
	MODAL_EMPTY_SPACE_EVENT_CLICK,
	BUTTON_CLOSE_EVENT_CLICK,
	MODAL_EVENT_SEGMENT,
	BUTTON_RED_EVENT_CLICK,
	ContextMenu,
	ButtonWithDynamicBackground
} from '../../../shared';

const Column: React.FC<IColumnProps> = ({ data }) => {
	const eventEmitter = useContext(EventEmitterContext);

	const { slots: slotsStoreForColumns } = useContext(EditorContext);

	const [columnModalStatus, setColumnModalStatus] = useState<boolean>(false);

	const { styles, slots: slotsIds, settingId, _id, accessStatusForChanges } = data;

	const arraySlots = slotsStoreForColumns[_id];

	useEffect(() => {
		eventEmitter.on(BUTTON_DOTS_EVENT_CLICK + COLUMN_EVENT_SEGMENT, ({ data }) => {
			// Тут нужно слущать все события контекстного меню колонки
			if (data.columnId === _id) {
				setColumnModalStatus(true);
			}
		});

		eventEmitter.on(MODAL_EMPTY_SPACE_EVENT_CLICK, () => { setColumnModalStatus(false); });
		eventEmitter.on(BUTTON_CLOSE_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => { setColumnModalStatus(false); });
		eventEmitter.on(BUTTON_RED_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => { setColumnModalStatus(false); });
	}, []);

	return (
		<div className='column' style={styles}>
			<div className='column__head'>
				<ButtonLock flagStatus={accessStatusForChanges} data={{ settingId, columnId: _id, value: { accessStatusForChanges: !accessStatusForChanges } }} segmentEvent={COLUMN_EVENT_SEGMENT} />
				<ButtonDots segmentEvent={COLUMN_EVENT_SEGMENT} data={{ columnId: _id }} />
			</div>
			<div className='column__container-slots'>
				{arraySlots.map((slotData) => {
					return (
						<Slot key={slotData._id} data={slotData} />
					);
				})}
			</div>
			<Modal isModal={columnModalStatus}>
				<ContextMenu data={configContextMenuColumn} renderElementFN={({ button, icon }: IElementContextMenu) => (
					<ButtonWithDynamicBackground {...button}>
						<span className='context-menu__text'>{button.textBtn}</span>
						<img className='context-menu__icon' src={`/assets/icons/${icon.name}`} alt={icon.alt} title={icon.titleHover} />
					</ButtonWithDynamicBackground>
				)} />
			</Modal>
		</div>
	);
};

export { Column };
