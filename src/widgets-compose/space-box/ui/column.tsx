import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import './column-style.css';
import type { IColumnProps } from './interafaces';
import { Slot } from './slot';
import { Modal } from '../../../bricks';
import type { IElementContextMenu } from '../../../shared';

import {
	EventEmitterContext,
	$slotsEditorStore,
	$columnsEditorStore
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
	ButtonWithDynamicBackground,
	configContextMenuColumn,
	BUTTON_LOCK_EVENT_CLICK,
	UPDATE_COLUMN_EVENT_SEGMENT,
	BUTTON_WITH_DYNAMIC_BACKGROUND
} from '../../../shared';

const Column: React.FC<IColumnProps> = observer(({ data }) => {
	const eventEmitter = useContext(EventEmitterContext);

	const { data: slotsPack } = $slotsEditorStore;

	const { updateColumnEditorAction } = $columnsEditorStore;

	const [columnModalStatus, setColumnModalStatus] = useState<boolean>(false);

	const { styles, slots: arraySlotsIds, settingId, _id, accessForChanges } = data;

	const arraySlots = slotsPack['slotsEditor'][_id];

	useEffect(() => {
		eventEmitter.on(BUTTON_DOTS_EVENT_CLICK + COLUMN_EVENT_SEGMENT, ({ data: payloadDotsBtn }) => {
			if (payloadDotsBtn.columnId === _id) {
				setColumnModalStatus(true);
			}
		});

		eventEmitter.on(BUTTON_LOCK_EVENT_CLICK + COLUMN_EVENT_SEGMENT, ({ data: payloadLockBtn }) => {
			if (payloadLockBtn.columnId === _id) {
				updateColumnEditorAction(payloadLockBtn);
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + UPDATE_COLUMN_EVENT_SEGMENT, ({ data: payloadDynamicBackgroundBtn }) => {
			if (payloadDynamicBackgroundBtn.columnId === _id) {
				updateColumnEditorAction(payloadDynamicBackgroundBtn);
			}
		});

		eventEmitter.on(MODAL_EMPTY_SPACE_EVENT_CLICK, () => { setColumnModalStatus(false); });
		eventEmitter.on(BUTTON_CLOSE_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => { setColumnModalStatus(false); });
		eventEmitter.on(BUTTON_RED_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => { setColumnModalStatus(false); });
	}, []);

	return (
		<div className='column' style={{...styles}}>
			<div className='column__head'>
				<ButtonLock flagStatus={accessForChanges} data={{ settingId, columnId: _id, value: { accessForChanges: !accessForChanges } }} segmentEvent={COLUMN_EVENT_SEGMENT} />
				<ButtonDots segmentEvent={COLUMN_EVENT_SEGMENT} data={{ columnId: _id }} />
			</div>
			<div className='column__container-slots'>
				{arraySlots.map((slotData: any) => {
					return (
						<Slot key={slotData._id} data={slotData} />
					);
				})}
			</div> 
			<Modal isModal={columnModalStatus}>
				<ContextMenu {...configContextMenuColumn} renderElementFN={({ button, icon }: IElementContextMenu) => (
					<ButtonWithDynamicBackground {...button} payload={{ settingId, columnId: _id, value: button.payload }}>
						<span className='context-menu__text'>{button.textBtn}</span>
						<img className='context-menu__icon' src={`/assets/icons/${icon.name}`} alt={icon.alt} title={icon.titleHover} />
					</ButtonWithDynamicBackground>
				)} />
			</Modal>
		</div>
	);
});

export { Column };
