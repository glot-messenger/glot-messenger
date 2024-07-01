import React, { useEffect, useContext } from 'react';
import type { IModalProps } from './interafaces';
import './modal-style.css';
import { EventEmitterContext } from '../../../../entities';
import { MODAL_EMPTY_SPACE_EVENT_CLICK } from '../../../core';

const Modal: React.FC<IModalProps> = ({ isModal, children }) => {
	const eventEmitter = useContext(EventEmitterContext);

	const handlerClick = (): void => {
		eventEmitter.emit(MODAL_EMPTY_SPACE_EVENT_CLICK);
		// ОТКЛЮЧИТЬ ПРОПАГАНДУ СОБЫТИЯ ТАК КАК РАБОТАЕТ И НА КОНТЕЙНЕР
	};

	useEffect(() => {
		if (isModal) {
			
		}
	}, []);

	return (
		<div className={'modal' + (isModal ? ' active' : '')} onClick={handlerClick}>
			<div className='modal__container'>
				{children}
			</div>
		</div>
	);
};

export { Modal };
