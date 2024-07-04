import type { IConfigContextMenuColumn } from '../../../shared';

const configContextMenuLogoGlot: IConfigContextMenuColumn = {
	title: 'Управление пространством',
	subTitle: 'Ознакомьтесь с GLOTом, настройте пространство под себя',
	data: [
		{
			button: {
				typeElement: 'button',
				textBtn: 'Что нового у GLOTа?',
				type: 'button',
				titleHover: 'Нажмите, чтобы ознакомиться с GLOTом и с его новыми возможностями.',
				classes: 'context-menu__btn gray-blue'
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
				classes: 'context-menu__btn yellow-yellow'
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
				classes: 'context-menu__btn blue-blue'
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
				classes: 'context-menu__btn gray-gray'
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
