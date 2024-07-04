import React, { useState, useEffect, useContext } from 'react';
import './logo-glot-style.css';
import { Modal } from '../../modal';
import { EventEmitterContext } from '../../../entities';
import type { IElementContextMenu } from '../../../shared';

import {
	ContextMenu,
	MODAL_EMPTY_SPACE_EVENT_CLICK,
	BUTTON_CLOSE_EVENT_CLICK,
	BUTTON_RED_EVENT_CLICK,
	MODAL_EVENT_SEGMENT,
	ButtonWithDynamicBackground
} from '../../../shared';

import {
	configLogoGlot,
	configContextMenuLogoGlot
} from '../config';

const LogoGlot: React.FC = () => {
	const eventEmitter = useContext(EventEmitterContext);

	const { icon, button } = configLogoGlot;

	const [logoGlotModalStatus, setLogoGlotModalStatus] = useState<boolean>(false);

	const handlerClick = (): void => {
		setLogoGlotModalStatus(true);
	};

	useEffect(() => {
		eventEmitter.on(MODAL_EMPTY_SPACE_EVENT_CLICK, () => { setLogoGlotModalStatus(false); });
		eventEmitter.on(BUTTON_CLOSE_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => { setLogoGlotModalStatus(false); });
		eventEmitter.on(BUTTON_RED_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => { setLogoGlotModalStatus(false); });
	}, []);

	// ВСТАВИТЬ ИКОНКУ КОНТЕКСТНОГО МЕНЮ СЛОТА СЮДА - icon box
	return (
		<div className='logo-glot'>
			<div className='logo-glot__container'>
				<div className='logo-glot__wrapper-btn'>
					<button onClick={handlerClick} title={button.titleHover} type={button.type} className={`logo-glot__btn${logoGlotModalStatus ? ' target' : ''}`}>
						<img className='logo-glot__icon' src={`/assets/icons/logo/${icon.name}`} alt={icon.alt} />
						<span className='logo-glot__element'></span>
					</button>
				</div>
			</div>
			<Modal isModal={logoGlotModalStatus}>
				<ContextMenu {...configContextMenuLogoGlot} renderElementFN={({ button, icon }: IElementContextMenu) => (
					<ButtonWithDynamicBackground {...button} payload={{}}>
						<span className='context-menu__text'>{button.textBtn}</span>
						<img className='context-menu__icon' src={`/assets/icons/${icon.name}`} alt={icon.alt} title={icon.titleHover} />
					</ButtonWithDynamicBackground>
				)} />
			</Modal>
		</div>
	);
};

export { LogoGlot };
