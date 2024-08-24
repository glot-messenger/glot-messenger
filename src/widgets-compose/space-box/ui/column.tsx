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
	BUTTON_WITH_DYNAMIC_BACKGROUND,
	MOVING_RIGHT_COLUMN_EVENT_SEGMENT,
	MOVING_LEFT_COLUMN_EVENT_SEGMENT,
	MOVING_BEGINNING_COLUMN_EVENT_SEGMENT,
	MOVING_ENDING_COLUMN_EVENT_SEGMENT,
	ADD_SLOT_EVENT_SEGMENT,
	DELETE_COLUMN_EVENT_SEGMENT,
	config
} from '../../../shared';

const Column: React.FC<IColumnProps> = observer(({ data }) => {
	const eventEmitter = useContext(EventEmitterContext);

	const { data: slotsPack, addNewSlotToTheColumnEditorAction } = $slotsEditorStore;

	const { updateColumnEditorAction, changingColumnEditorPositionAction, deleteColumnByIdEditorAction } = $columnsEditorStore;

	const [columnModalStatus, setColumnModalStatus] = useState<boolean>(false);

	const { styles, slots: arraySlotsIds, settingId, _id, accessForChanges } = data;

	const arraySlots = slotsPack['slotsEditor'][_id];

	useEffect(() => {
		eventEmitter.on(BUTTON_DOTS_EVENT_CLICK + COLUMN_EVENT_SEGMENT, ({ data: payloadDotsBtn }) => {
			// Открывает контекстное меню колонки
			if (payloadDotsBtn.columnId === _id) {
				setColumnModalStatus(true);
			}
		});

		eventEmitter.on(BUTTON_LOCK_EVENT_CLICK + COLUMN_EVENT_SEGMENT, ({ data: payloadLockBtn }) => {
			// Обновление колонки по замочку (открыть/закрыть для изменений)
			if (payloadLockBtn.columnId === _id) {
				updateColumnEditorAction(payloadLockBtn);
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + UPDATE_COLUMN_EVENT_SEGMENT, ({ data: payloadDynamicBackgroundBtn }) => {
			// Обновление колонки через ее контекстное меню (открыть/закрыть для изменений)
			if (payloadDynamicBackgroundBtn.columnId === _id) {
				updateColumnEditorAction(payloadDynamicBackgroundBtn);
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + MOVING_RIGHT_COLUMN_EVENT_SEGMENT, ({ data: payloadDynamicBackgroundBtn }) => {
			// Обновление позиции колонки в редакторе, смещение вправо
			if (payloadDynamicBackgroundBtn.columnId === _id) {
				changingColumnEditorPositionAction(payloadDynamicBackgroundBtn);
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + MOVING_LEFT_COLUMN_EVENT_SEGMENT, ({ data: payloadDynamicBackgroundBtn }) => {
			// Обновление позиции колонки в редакторе, смещение влево
			if (payloadDynamicBackgroundBtn.columnId === _id) {
				changingColumnEditorPositionAction(payloadDynamicBackgroundBtn);
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + MOVING_BEGINNING_COLUMN_EVENT_SEGMENT, ({ data: payloadDynamicBackgroundBtn }) => {
			// Обновление позиции колонки в редакторе, смещение в начало
			if (payloadDynamicBackgroundBtn.columnId === _id) {
				changingColumnEditorPositionAction(payloadDynamicBackgroundBtn);
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + MOVING_ENDING_COLUMN_EVENT_SEGMENT, ({ data: payloadDynamicBackgroundBtn }) => {
			// Обновление позиции колонки в редакторе, смещение в конец
			if (payloadDynamicBackgroundBtn.columnId === _id) {
				changingColumnEditorPositionAction(payloadDynamicBackgroundBtn);
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + ADD_SLOT_EVENT_SEGMENT, ({ data: payloadDynamicBackgroundBtn }) => {
			// Добавление в колонку нового слота
			if (payloadDynamicBackgroundBtn.columnId === _id) {
				addNewSlotToTheColumnEditorAction(payloadDynamicBackgroundBtn);
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + DELETE_COLUMN_EVENT_SEGMENT, ({ data: payloadDynamicBackgroundBtn }) => {
			// Удаление колонки со всеми слотами
			if (payloadDynamicBackgroundBtn.columnId === _id) {
				deleteColumnByIdEditorAction(payloadDynamicBackgroundBtn);
			}
		});

		// События, закрывающие модальное окно
		eventEmitter.on(MODAL_EMPTY_SPACE_EVENT_CLICK, () => { setColumnModalStatus(false); });
		eventEmitter.on(BUTTON_CLOSE_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => { setColumnModalStatus(false); });
		eventEmitter.on(BUTTON_RED_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => { setColumnModalStatus(false); });
	}, []);

	return (
		<div className='column' style={{ ...styles }}>
			<div className='column__head'>
				<div className='column__head-btns-container'>
					<ButtonLock flagStatus={accessForChanges} data={{ settingId, columnId: _id, value: { accessForChanges: !accessForChanges } }} segmentEvent={COLUMN_EVENT_SEGMENT} />
					<ButtonDots segmentEvent={COLUMN_EVENT_SEGMENT} data={{ columnId: _id }} />
				</div>
			</div>
			<div className='column__container-slots'>
				{arraySlots.map((slotData: any) => {
					return (
						<Slot key={slotData._id} data={slotData} />
					);
				})}
			</div>
			<Modal isModal={columnModalStatus}>
				<ContextMenu { ...configContextMenuColumn } renderElementFN={({ button, icon }: IElementContextMenu) => (
					<ButtonWithDynamicBackground {...button} payload={{ settingId, columnId: _id, value: button.payload }}>
						<span className='context-menu__text'>{button.textBtn}</span>
						<img className='context-menu__icon' src={`${config.endPointForStatics}assets/icons/${icon.name}`} alt={icon.alt} title={icon.titleHover} />
					</ButtonWithDynamicBackground>
				)} />
			</Modal>
		</div>
	);
});

export { Column };
