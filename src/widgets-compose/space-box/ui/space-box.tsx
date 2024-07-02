import React, { useContext, useEffect, useState } from 'react';
import './space-box-style.css';
import './context-menu-style.css';

import {
	EditorContext,
	EventEmitterContext
} from '../../../entities';

import { Column } from './column';
import { ContextMenuColumn } from './context-menu-column';

import {
	Modal,
	BUTTON_DOTS_EVENT_CLICK,
	COLUMN_EVENT_SEGMENT,
	MODAL_EMPTY_SPACE_EVENT_CLICK,
	BUTTON_CLOSE_EVENT_CLICK,
	MODAL_EVENT_SEGMENT,
	BUTTON_RED_EVENT_CLICK,
	SLOT_EVENT_SEGMENT
} from '../../../shared';

const SpaceBox: React.FC = () => {
	const eventEmitter = useContext(EventEmitterContext);

	const { columns } = useContext(EditorContext);

	const [columnModalStatus, setColumnModalStatus] = useState<boolean>(false);

	const [slotModalStatus, setSlotModalStatus] = useState<boolean>(false);

	useEffect(() => {
		if (columns) {
			eventEmitter.on(BUTTON_DOTS_EVENT_CLICK + COLUMN_EVENT_SEGMENT, (payload) => {
				console.log('Данные по кликнутой колонке. Тут можно поймать событие уже самого компонента модалки и сделать работу.', payload);

				setColumnModalStatus(true);
			});

			eventEmitter.on(MODAL_EMPTY_SPACE_EVENT_CLICK, () => {
				setColumnModalStatus(false);

				setSlotModalStatus(false);
			});

			eventEmitter.on(BUTTON_CLOSE_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => {
				setColumnModalStatus(false);

				setSlotModalStatus(false);
			});

			eventEmitter.on(BUTTON_RED_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => {
				setColumnModalStatus(false);

				setSlotModalStatus(false);
			});

			eventEmitter.on(BUTTON_DOTS_EVENT_CLICK + SLOT_EVENT_SEGMENT, (payload) => {
				console.log('Данные по кликнутому слоту. Тут можно поймать событие уже самого компонента модалки и сделать работу.', payload);

				setSlotModalStatus(true);
			});
		}
	}, []);

	return (
		<div className='space-box'>
			<div className='space-box__container'>
				{columns.map((columnData: any) => {
					return (
						<Column key={columnData._id} data={columnData} />
					);
				})}
			</div>
			<Modal isModal={columnModalStatus}>
				<ContextMenuColumn />
			</Modal>
			<Modal isModal={slotModalStatus}>
				<div>CONTENT SLOT DATA!!!!!!!!!!!!!!</div>
			</Modal>
		</div>
	);
};

export { SpaceBox };
