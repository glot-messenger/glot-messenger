import React, { useContext, useEffect, useState } from 'react';
import './space-box-style.css';

import {
	EditorContext,
	EventEmitterContext
} from '../../../entities';

import { Column } from './column';

import {
	Modal,
	BUTTON_DOTS_EVENT_CLICK,
	COLUMN_EVENT_SEGMENT,
	MODAL_EMPTY_SPACE_EVENT_CLICK
} from '../../../shared';

const SpaceBox: React.FC = () => {
	const eventEmitter = useContext(EventEmitterContext);

	const { columns } = useContext(EditorContext);

	const [columnModalStatus, setColumnModalStatus] = useState<boolean>(false);

	useEffect(() => {
		if (columns) {
			eventEmitter.on(BUTTON_DOTS_EVENT_CLICK + COLUMN_EVENT_SEGMENT, (payload) => {
				console.log('Данные по кликнутой колонке', payload);

				setColumnModalStatus(true);
			});

			eventEmitter.on(MODAL_EMPTY_SPACE_EVENT_CLICK, () => {
				setColumnModalStatus(false);
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
				<div>CONTENT MODAL COMPONENT</div>
			</Modal>
		</div>
	);
};

export { SpaceBox };
