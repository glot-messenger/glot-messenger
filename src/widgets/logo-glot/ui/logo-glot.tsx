import React, { useState, useEffect, useContext } from 'react';
import './logo-glot-style.css';
import { Modal } from '../../../bricks';
import type { IElementContextMenu } from '../../../shared';
import type { ILogoGlotProps } from './interafaces';
import { SocialNetworkBlock } from './social-network-block';

import {
	EventEmitterContext,
	EditorContext
} from '../../../entities';

import {
	ContextMenu,
	MODAL_EMPTY_SPACE_EVENT_CLICK,
	BUTTON_CLOSE_EVENT_CLICK,
	BUTTON_RED_EVENT_CLICK,
	MODAL_EVENT_SEGMENT,
	ButtonWithDynamicBackground,
	ButtonArrows,
	SLOT_EVENT_SEGMENT,
	BUTTON_ARROWS_EVENT_CLICK,
	configContextMenuSlot,
	BUTTON_WITH_DYNAMIC_BACKGROUND,
	ADD_COLUMN_EVENT_SEGMENT,
	SHOW_SOCIAL_NETWORK_EVENT_SEGMENT
} from '../../../shared';

import {
	configLogoGlot,
	configContextMenuLogoGlot,
	configLogoGlotBtnArrows
} from '../config';

const LogoGlot: React.FC<ILogoGlotProps> = ({ columnId, _id }) => {
	const eventEmitter = useContext(EventEmitterContext);

	const { modules, editor } = useContext(EditorContext);

	const { icon, button } = configLogoGlot;

	const [logoGlotModalStatus, setLogoGlotModalStatus] = useState<boolean>(false);

	const [slotModalStatus, setSlotModalStatus] = useState<boolean>(false);

	const [socialNetworkModalStatus, setSocialNetworkModalStatus] = useState<boolean>(false);

	const handlerClick = (): void => {
		setLogoGlotModalStatus(true);
	};

	useEffect(() => {
		eventEmitter.on(BUTTON_ARROWS_EVENT_CLICK + SLOT_EVENT_SEGMENT, () => {
			setSlotModalStatus(true);
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + ADD_COLUMN_EVENT_SEGMENT, () => {
			modules.column.addColumn({ settingId: editor._id });
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + SHOW_SOCIAL_NETWORK_EVENT_SEGMENT, (payload) => {
			setLogoGlotModalStatus(false);
			setSlotModalStatus(false);
			setSocialNetworkModalStatus(true);
		});

		eventEmitter.on(MODAL_EMPTY_SPACE_EVENT_CLICK, () => {
			setLogoGlotModalStatus(false);
			setSlotModalStatus(false);
			setSocialNetworkModalStatus(false);
		});
		eventEmitter.on(BUTTON_CLOSE_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => {
			setLogoGlotModalStatus(false);
			setSlotModalStatus(false);
			setSocialNetworkModalStatus(false);
		});
		eventEmitter.on(BUTTON_RED_EVENT_CLICK + MODAL_EVENT_SEGMENT, () => {
			setLogoGlotModalStatus(false);
			setSlotModalStatus(false);
			setSocialNetworkModalStatus(false);
		});
	}, []);

	return (
		<div className='logo-glot'>
			<ButtonArrows {...configLogoGlotBtnArrows.button} />
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
					<ButtonWithDynamicBackground {...button} payload={{ columnId, slotId: _id, ...button.payload }}>
						<span className='context-menu__text'>{button.textBtn}</span>
						<img className='context-menu__icon' src={`/assets/icons/${icon.name}`} alt={icon.alt} title={icon.titleHover} />
					</ButtonWithDynamicBackground>
				)} />
			</Modal>
			<Modal isModal={slotModalStatus}>
				<ContextMenu {...configContextMenuSlot}  renderElementFN={({ button, icon }: IElementContextMenu) => (// ДОДЕЛАТЬ СМЕНУ ПОЗИЦИИ СЛОТА ВНИЗ
					<ButtonWithDynamicBackground {...button} payload={{ columnId, slotId: _id, ...button.payload }}>
						<span className='context-menu__text'>{button.textBtn}</span>
						<img className='context-menu__icon' src={`/assets/icons/${icon.name}`} alt={icon.alt} title={icon.titleHover} />
					</ButtonWithDynamicBackground>
				)} />
			</Modal>
			<Modal isModal={socialNetworkModalStatus}>
				<SocialNetworkBlock />
			</Modal>
		</div>
	);
};

export { LogoGlot };
