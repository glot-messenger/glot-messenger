import React, { useState, useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import './logo-glot-style.css';
import { Modal } from '../../../bricks';
import type { IElementContextMenu } from '../../../shared';
import type { ILogoGlotProps } from './interafaces';
import { SocialNetworkBlock } from './social-network-block';
import { useNavigate } from 'react-router-dom';

import {
	EventEmitterContext,
	$settingsEditorStore,
	$columnsEditorStore
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
	SHOW_SOCIAL_NETWORK_EVENT_SEGMENT,
	LOG_OUT_AUTHORIZATION_EVENT_SEGMENT,
	HOME
} from '../../../shared';

import {
	configLogoGlot,
	configContextMenuLogoGlot,
	configLogoGlotBtnArrows
} from '../config';

const LogoGlot: React.FC<ILogoGlotProps> = observer(({ columnId, _id }) => {
	const navigate = useNavigate();

	const eventEmitter = useContext(EventEmitterContext);

	const { icon, button } = configLogoGlot;

	const [logoGlotModalStatus, setLogoGlotModalStatus] = useState<boolean>(false);

	const [slotModalStatus, setSlotModalStatus] = useState<boolean>(false);

	const [socialNetworkModalStatus, setSocialNetworkModalStatus] = useState<boolean>(false);

	const { data: settingsEditorDataStore } = $settingsEditorStore;

	const { addNewColumnInEditorAction } = $columnsEditorStore;

	const handlerClick = (): void => {
		setLogoGlotModalStatus(true);
	};

	useEffect(() => {
		eventEmitter.on(BUTTON_ARROWS_EVENT_CLICK + SLOT_EVENT_SEGMENT, () => {
			setSlotModalStatus(true);
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + ADD_COLUMN_EVENT_SEGMENT, () => {
			if (settingsEditorDataStore && settingsEditorDataStore.settingsEditor && settingsEditorDataStore.settingsEditor._id) {
				addNewColumnInEditorAction({ settingId: settingsEditorDataStore.settingsEditor._id });
			}
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + SHOW_SOCIAL_NETWORK_EVENT_SEGMENT, (payload) => {
			setLogoGlotModalStatus(false);
			setSlotModalStatus(false);
			setSocialNetworkModalStatus(true);
		});

		eventEmitter.on(BUTTON_WITH_DYNAMIC_BACKGROUND + LOG_OUT_AUTHORIZATION_EVENT_SEGMENT, (payload) => {
			console.log('Нужно написать функцию, которая сбросит стор авторизации и сбросит из LocalStorage всю информацию по авторизации.');

			setLogoGlotModalStatus(false);
			setSlotModalStatus(false);
			setSocialNetworkModalStatus(false);

			navigate(HOME);
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
				<ContextMenu {...configContextMenuSlot}  renderElementFN={({ button, icon }: IElementContextMenu) => (
					<ButtonWithDynamicBackground {...button} payload={{ columnId, slotId: _id, settingId: settingsEditorDataStore?.settingsEditor?._id, ...button.payload }}>
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
});

export { LogoGlot };
