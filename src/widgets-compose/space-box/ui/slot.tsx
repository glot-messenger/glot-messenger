import React, { useState, useEffect, useContext } from 'react';
import type { ISlotProps } from './interafaces';
import './slot-style.css';
import { EventEmitterContext } from '../../../entities';
import type { IElementContextMenu } from '../../../shared';
import { configContextMenuSlot } from '../config';

import {
	SlotEmpty,
	Modal
} from '../../../widgets';

import {
	BUTTON_DOTS_EVENT_CLICK,
	SLOT_EVENT_SEGMENT,
	MODAL_EMPTY_SPACE_EVENT_CLICK,
	BUTTON_CLOSE_EVENT_CLICK,
	MODAL_EVENT_SEGMENT,
	BUTTON_RED_EVENT_CLICK,
	ContextMenu,
	ButtonWithDynamicBackground
} from '../../../shared';

const Slot: React.FC<ISlotProps> = ({ data }) => {
	const eventEmitter = useContext(EventEmitterContext);

	const { isEmpty, columnId, _id } = data;

	const [slotModalStatus, setSlotModalStatus] = useState<boolean>(false);

	useEffect(() => {
		eventEmitter.on(BUTTON_DOTS_EVENT_CLICK + SLOT_EVENT_SEGMENT, (payload) => {
			console.log('Данные по кликнутому слоту. Тут можно поймать событие уже самого компонента модалки и сделать работу.', payload);

			// тут нужно слушать все события контекстного меню слотов

			setSlotModalStatus(true);
		});

		eventEmitter.on(MODAL_EMPTY_SPACE_EVENT_CLICK, () => { setSlotModalStatus(false); });
		eventEmitter.on(BUTTON_CLOSE_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => { setSlotModalStatus(false); });
		eventEmitter.on(BUTTON_RED_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => { setSlotModalStatus(false); });
	}, []);

	// Тут буду разводить виджеты if else, если пустой слот, то SLotEmpty иначе в зависимости от названия виджета
	return (
		<div className='slot'>
			<div className='slot__container'>
				<SlotEmpty {...data} />
			</div>
			<Modal isModal={slotModalStatus}>
				<ContextMenu data={configContextMenuSlot} renderElementFN={({ button, icon }: IElementContextMenu) => (
					<ButtonWithDynamicBackground {...button}>
						<span className='context-menu__text'>{button.textBtn}</span>
						<img className='context-menu__icon' src={`/assets/icons/${icon.name}`} alt={icon.alt} title={icon.titleHover} />
					</ButtonWithDynamicBackground>
				)} />
			</Modal>
		</div>
	);
};

export { Slot };
