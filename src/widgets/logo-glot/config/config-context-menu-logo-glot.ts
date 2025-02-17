import type { IConfigContextMenu } from '../../../shared';

import {
	ADD_COLUMN_EVENT_SEGMENT,
	SHOW_SOCIAL_NETWORK_EVENT_SEGMENT,
	LOG_OUT_AUTHORIZATION_EVENT_SEGMENT,
	SHOW_WHATS_NEW_EVENT_SEGMENT
} from '../../../shared';

const configContextMenuLogoGlot: IConfigContextMenu = {
	title: 'Управление пространством',
	subTitle: 'Ознакомьтесь с GLOTом, настройте пространство под себя',
	icon: {
		name: 'geometric.svg',
		alt: 'Геометрические фигуры'
	},
	data: [
		{
			button: {
				typeElement: 'button',
				textBtn: 'Что нового у GLOTа?',
				type: 'button',
				titleHover: 'Нажмите, чтобы ознакомиться с GLOTом и с его новыми возможностями.',
				classes: 'context-menu__btn gray-blue',
				segmentEvent: SHOW_WHATS_NEW_EVENT_SEGMENT,
				payload: {}
			},
			icon: {
				name: 'info.svg',
				alt: 'Иконка информации',
				titleHover: 'Info - информация.'
			}
		},
		{
			button: {
				typeElement: 'button',
				textBtn: 'Социальные сети GLOTа',
				type: 'button',
				titleHover: 'Нажмите, чтобы посмотреть все социальные сети GLOTа.',
				classes: 'context-menu__btn yellow-yellow',
				segmentEvent: SHOW_SOCIAL_NETWORK_EVENT_SEGMENT,
				payload: {}
			},
			icon: {
				name: 'social-network.svg',
				alt: 'Социальные сети. Три пользователя в ряд.',
				titleHover: 'Social network.'
			}
		},
		{
			button: {
				typeElement: 'button',
				textBtn: 'Добавить колонку',
				type: 'button',
				titleHover: 'Нажмите, чтобы добавить колонку в интерфейс.',
				classes: 'context-menu__btn blue-blue',
				segmentEvent: ADD_COLUMN_EVENT_SEGMENT,
				payload: {}
			},
			icon: {
				name: 'add.svg',
				alt: 'Иконка плюсика в квадрате',
				titleHover: 'Плюсик - добавить.'
			}
		},
		{
			button: {
				typeElement: 'button',
				textBtn: 'Выйти из учетной записи',
				type: 'button',
				titleHover: 'Нажмите, чтобы выйти из текущей авторизации.',
				classes: 'context-menu__btn gray-gray',
				segmentEvent: LOG_OUT_AUTHORIZATION_EVENT_SEGMENT,
				payload: {}
			},
			icon: {
				name: 'out-door.svg',
				alt: 'Дверь на выход с стрелочкой',
				titleHover: 'Дверь - выйти.'
			}
		}
	]
};

export { configContextMenuLogoGlot };
