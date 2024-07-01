import React, { useContext } from 'react';
import type { IModalProps } from './interafaces';
import './modal-style.css';
import { EventEmitterContext } from '../../../../entities';
import { configForModal } from '../config';

import {
	MODAL_EMPTY_SPACE_EVENT_CLICK,
	MODAL_EVENT_SEGMENT
} from '../../../core';

import { ButtonClose } from '../../button-close';
import { ButtonRed } from '../../button-red';

const Modal: React.FC<IModalProps> = ({ isModal, children }) => {
	const eventEmitter = useContext(EventEmitterContext);

	const handlerClickOnModalEmptySpace = (): void => {
		eventEmitter.emit(MODAL_EMPTY_SPACE_EVENT_CLICK);
	};

	return (
		<div className={'modal' + (isModal ? ' active' : '')} onClick={handlerClickOnModalEmptySpace}>
			<div onClick={(event) => event.stopPropagation()} className='modal__container'>
				<div className='modal__header'>
					<ButtonClose segmentEvent={MODAL_EVENT_SEGMENT} />
				</div>
				<div className='modal__content'>
					{children}
				</div>
				<div className='modal__footer'>
					<ButtonRed segmentEvent={MODAL_EVENT_SEGMENT} {...configForModal.button} />
				</div>
			</div>
		</div>
	);
};

export { Modal };
