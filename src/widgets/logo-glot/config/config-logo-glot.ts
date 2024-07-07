import type {
	IConfigLogoGlot,
	IConfigLogoGlotBtnArrows
} from './interafaces';

import { SLOT_EVENT_SEGMENT } from '../../../shared';

const configLogoGlot: IConfigLogoGlot = {
	button: {
		type: 'button',
		titleHover: 'Нажмите, чтобы вызвать меню управления пространством.'
	},
	icon: {
		name: 'glot5.svg',
		alt: 'Иконка мессенджера GLOT'
	}
};

const configLogoGlotBtnArrows: IConfigLogoGlotBtnArrows = {
	button: {
		typeElement: 'button',
		type: 'button',
		titleHover: 'Нажмите, чтобы вызвать контекстное меню слота, в котором находится виджет логотипа GLOTа',
		classes: 'logo-glot__btn-slot',
		segmentEvent: SLOT_EVENT_SEGMENT
	}
};

export {
	configLogoGlot,
	configLogoGlotBtnArrows
};
