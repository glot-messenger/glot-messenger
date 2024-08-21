import React, { useState, useEffect, useContext } from 'react';
import type { ISlotProps } from './interafaces';
import './slot-style.css';
import { observer } from 'mobx-react-lite';
import type { IElementContextMenu } from '../../../shared';
import { Modal } from '../../../bricks';
import { $slotsEditorStore } from '../../../entities';

import {
	SlotEmpty,
	LogoGlot
} from '../../../widgets';

import {
	BUTTON_DOTS_EVENT_CLICK,
	SLOT_EVENT_SEGMENT,
	MODAL_EMPTY_SPACE_EVENT_CLICK,
	BUTTON_CLOSE_EVENT_CLICK,
	MODAL_EVENT_SEGMENT,
	BUTTON_RED_EVENT_CLICK,
	ContextMenu,
	ButtonWithDynamicBackground,
	configContextMenuSlot,
	BUTTON_WITH_DYNAMIC_BACKGROUND,
	DELETE_SLOT_EVENT_SEGMENT,
	CLEAR_SLOT_EVENT_SEGMENT,
	MOVING_DOWN_SLOT_EVENT_SEGMENT,
	MOVING_UP_SLOT_EVENT_SEGMENT,
	MOVING_BEGINNING_SLOT_EVENT_SEGMENT,
	MOVING_ENDING_SLOT_EVENT_SEGMENT
} from '../../../shared';

import { EventEmitterContext } from '../../../entities';

const Slot: React.FC<ISlotProps> = observer(({ data }) => {
	const eventEmitter = useContext(EventEmitterContext);

	const { isEmpty, columnId, _id, nameWidget } = data;

	const { updateSlotEditorAction, deleteSlotByIdEditorAction, changingSlotEditorPositionAction } = $slotsEditorStore;

	const [slotModalStatus, setSlotModalStatus] = useState<boolean>(false);

	useEffect(() => {
		eventEmitter.on(BUTTON_DOTS_EVENT_CLICK + SLOT_EVENT_SEGMENT, ({ data: payloadDots }) => {
			// Открывает контекстное меню слота
			if (payloadDots.slotId === _id) {
				setSlotModalStatus(true);
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + CLEAR_SLOT_EVENT_SEGMENT, ({ data: payloadDynamicBackgroundBtn }) => {
			// Очищение слота от виджета
			if (payloadDynamicBackgroundBtn.slotId === _id && !payloadDynamicBackgroundBtn.isEmpty) {
				updateSlotEditorAction(payloadDynamicBackgroundBtn);
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + DELETE_SLOT_EVENT_SEGMENT, ({ data: payloadDynamicBackgroundBtn }) => {
			// Удаление слота
			if (payloadDynamicBackgroundBtn.slotId === _id) {
				deleteSlotByIdEditorAction(payloadDynamicBackgroundBtn);
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + MOVING_DOWN_SLOT_EVENT_SEGMENT, ({ data: payloadDynamicBackgroundBtn }) => {
			// Перемещение слота вниз
			if (payloadDynamicBackgroundBtn.slotId === _id) {
				changingSlotEditorPositionAction(payloadDynamicBackgroundBtn);
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + MOVING_UP_SLOT_EVENT_SEGMENT, ({ data: payloadDynamicBackgroundBtn }) => {
			// Перемещение слота вверх
			if (payloadDynamicBackgroundBtn.slotId === _id) {
				changingSlotEditorPositionAction(payloadDynamicBackgroundBtn);
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + MOVING_BEGINNING_SLOT_EVENT_SEGMENT, ({ data: payloadDynamicBackgroundBtn }) => {
			// Перемещение слота в начало 
			if (payloadDynamicBackgroundBtn.slotId === _id) {
				changingSlotEditorPositionAction(payloadDynamicBackgroundBtn);
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + MOVING_ENDING_SLOT_EVENT_SEGMENT, ({ data: payloadDynamicBackgroundBtn }) => {
			// Перемещение слота в конец
			if (payloadDynamicBackgroundBtn.slotId === _id) {
				changingSlotEditorPositionAction(payloadDynamicBackgroundBtn);
			}
		});

		// События, закрывающие модальное окно
		eventEmitter.on(MODAL_EMPTY_SPACE_EVENT_CLICK, () => { setSlotModalStatus(false); });
		eventEmitter.on(BUTTON_CLOSE_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => { setSlotModalStatus(false); });
		eventEmitter.on(BUTTON_RED_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => { setSlotModalStatus(false); });
	}, []);

	return (
		<div className='slot'>
			<div className='slot__container'>
				{
					nameWidget === 'logo-glot' ?
						<LogoGlot { ...data } /> :
						<SlotEmpty { ...data } />
				}
			</div>
			<Modal isModal={slotModalStatus}>
				<ContextMenu { ...configContextMenuSlot } renderElementFN={({ button, icon }: IElementContextMenu) => {
					return (
						<ButtonWithDynamicBackground { ...button } payload={{ columnId, slotId: _id, isEmpty, value: button.payload  }}>
							<span className='context-menu__text'>{button.textBtn}</span>
							<img className='context-menu__icon' src={`/assets/icons/${icon.name}`} alt={icon.alt} title={icon.titleHover} />
						</ButtonWithDynamicBackground>
					);
				}} />
			</Modal>
		</div>
	);
});

export { Slot };
