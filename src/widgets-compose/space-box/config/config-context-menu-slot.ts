import type { IConfigContextMenuColumn } from '../../../shared';

const configContextMenuSlot: IConfigContextMenuColumn = [
   {
		button: {
			typeElement: 'button',
			textBtn: 'Добавить слот',
			type: 'button',
			titleHover: 'Нажмите, чтобы добавить еще один слот в колонку.',
			classes: 'context-menu__btn blue-blue',
			segmentEvent: ''
		},
		icon: {
			name: 'add.svg',
			alt: 'Иконка плюсика в квадрате',
			titleHover: 'Плюсик - добавить.'
		}
	}
];

export { configContextMenuSlot };
