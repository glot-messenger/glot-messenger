import React, { useState, useEffect, useContext } from 'react';
import type { ISlotProps } from './interafaces';
import './slot-style.css';
import { EventEmitterContext } from '../../../entities';
import type { IElementContextMenu } from '../../../shared';

import {
	SlotEmpty,
	Modal,
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
	configContextMenuSlot
} from '../../../shared';

const Slot: React.FC<ISlotProps> = ({ data }) => {
	const eventEmitter = useContext(EventEmitterContext);

	const { isEmpty, columnId, _id, nameWidget } = data;

	const [slotModalStatus, setSlotModalStatus] = useState<boolean>(false);

	useEffect(() => {
		eventEmitter.on(BUTTON_DOTS_EVENT_CLICK + SLOT_EVENT_SEGMENT, ({ data }) => {
			// тут нужно слушать все события контекстного меню слотов

			if (data.slotId === _id) {
				setSlotModalStatus(true);
			}
		});

		eventEmitter.on(MODAL_EMPTY_SPACE_EVENT_CLICK, () => { setSlotModalStatus(false); });
		eventEmitter.on(BUTTON_CLOSE_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => { setSlotModalStatus(false); });
		eventEmitter.on(BUTTON_RED_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => { setSlotModalStatus(false); });
	}, []);

	// Тут буду разводить виджеты if else, если пустой слот, то SLotEmpty иначе в зависимости от названия виджета
	return (
		<div className='slot'>
			<div className='slot__container'>
				{
					nameWidget === 'logo-glot' ?
						<LogoGlot {...data} /> :
						<SlotEmpty {...data} />
				}
			</div>
			<Modal isModal={slotModalStatus}>
				<ContextMenu {...configContextMenuSlot} renderElementFN={({ button, icon }: IElementContextMenu) => {
					return (
						<ButtonWithDynamicBackground {...button} payload={{ columnId, slotId: _id, ...button.payload  }}>
							<span className='context-menu__text'>{button.textBtn}</span>
							<img className='context-menu__icon' src={`/assets/icons/${icon.name}`} alt={icon.alt} title={icon.titleHover} />
						</ButtonWithDynamicBackground>
					);
				}} />
			</Modal>
		</div>
	);
};

export { Slot };
