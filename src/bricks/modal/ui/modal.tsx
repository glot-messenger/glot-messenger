import React, { useContext } from 'react';
import type { IModalProps } from './interafaces';
import './modal-style.css';
import { EventEmitterContext } from '../../../entities';
import { configForModal } from '../config';

import {
	ButtonClose,
	ButtonRed,
	MODAL_EMPTY_SPACE_EVENT_CLICK,
	MODAL_EVENT_SEGMENT
} from '../../../shared';

const Modal: React.FC<IModalProps> = ({ isModal, children, title }) => {
	const eventEmitter = useContext(EventEmitterContext);

	const handlerClickOnModalEmptySpace = (): void => {
		eventEmitter.emit(MODAL_EMPTY_SPACE_EVENT_CLICK);
	};

	return (
		<div className={'modal' + (isModal ? ' active' : '')} onClick={handlerClickOnModalEmptySpace}>
			{isModal &&
				<div onClick={(event) => event.stopPropagation()} className='modal__container'>
					<div className='modal__header header-modal'>
						<div className='header-modal__container-title'>
							{title &&
								<h1 className='header-modal__title'>{title}</h1>
							}
						</div>
						<ButtonClose segmentEvent={MODAL_EVENT_SEGMENT} />
					</div>
					<div className='modal__content'>
						{children}
					</div>
					<div className='modal__footer'>
						<ButtonRed segmentEvent={MODAL_EVENT_SEGMENT} {...configForModal.button} />
					</div>
				</div>
			}
		</div>
	);
};

export { Modal };
