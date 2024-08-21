import type { IConfigContextMenu } from '../../types';

import {
	DELETE_SLOT_EVENT_SEGMENT,
	CLEAR_SLOT_EVENT_SEGMENT,
	MOVING_DOWN_SLOT_EVENT_SEGMENT,
	MOVING_UP_SLOT_EVENT_SEGMENT,
	MOVING_BEGINNING_SLOT_EVENT_SEGMENT,
	MOVING_ENDING_SLOT_EVENT_SEGMENT
} from '../../core';

const configContextMenuSlot: IConfigContextMenu = {
	title: 'Настройки слота',
	subTitle: 'Слот - минимальная составляющая интерфейса, в которую уже помещаются ваши виджеты. В этом месте вы можете настроить слот.',
	icon: {
		name: 'settings.svg',
		alt: 'Иконка шестеренки'
	},
	data: [
		{
			button: {
				typeElement: 'button',
				textBtn: 'Удалить слот',
				type: 'button',
				titleHover: 'Нажмите, чтобы удалить слот.',
				classes: 'context-menu__btn red-red',
				segmentEvent: DELETE_SLOT_EVENT_SEGMENT,
				payload: {}
			},
			icon: {
				name: 'delete-urn.svg',
				alt: 'Иконка мусорной корзины',
				titleHover: 'Корзина - удалить.'
			}
		},
		{
			button: {
				typeElement: 'button',
				textBtn: 'Очистить слот от виджета',
				type: 'button',
				titleHover: 'Нажмите, чтобы очистить слот от виджета и сделать его пустым.',
				classes: 'context-menu__btn green-green',
				segmentEvent: CLEAR_SLOT_EVENT_SEGMENT,
				payload: {
					nameWidget: '',
					isEmpty: true
				}
			},
			icon: {
				name: 'clear.svg',
				alt: 'Иконка метлы для мусора',
				titleHover: 'Метелка - очистить.'
			}
		},
		{
			button: {
				typeElement: 'button',
				textBtn: 'Переместить слот вверх',
				type: 'button',
				titleHover: 'Нажмите, чтобы переместить слот вверх.',
				classes: 'context-menu__btn gray-blue',
				segmentEvent: MOVING_UP_SLOT_EVENT_SEGMENT,
				payload: {
					position: 'index - 1'
				}
			},
			icon: {
				name: 'arrow-up.svg',
				alt: 'Иконка треугольной стрелки - вверх',
				titleHover: 'Стрелочка - вверх.'
			}
		},
		{
			button: {
				typeElement: 'button',
				textBtn: 'Переместить слот вниз',
				type: 'button',
				titleHover: 'Нажмите, чтобы переместить слот вниз.',
				classes: 'context-menu__btn gray-blue',
				segmentEvent: MOVING_DOWN_SLOT_EVENT_SEGMENT,
				payload: {
					position: 'index + 1'
				}
			},
			icon: {
				name: 'arrow-down.svg',
				alt: 'Иконка треугольной стрелки - вниз',
				titleHover: 'Стрелочка - вниз.'
			}
		},
		{
			button: {
				typeElement: 'button',
				textBtn: 'Отправить слот в начало',
				type: 'button',
				titleHover: 'Нажмите, чтобы отправить слот в начало.',
				classes: 'context-menu__btn gray-blue',
				segmentEvent: MOVING_BEGINNING_SLOT_EVENT_SEGMENT,
				payload: {
					position: 'index = first'
				}
			},
			icon: {
				name: 'first-position.svg',
				alt: 'Иконка стрелки вверх с черточкой вверху',
				titleHover: 'Стрелочка с чертой вверху - символизирует отправление выбранного слота в начало (перед всеми остальными).'
			}
		},
		{
			button: {
				typeElement: 'button',
				textBtn: 'Отправить слот в конец',
				type: 'button',
				titleHover: 'Нажмите, чтобы отправить слот в конец.',
				classes: 'context-menu__btn gray-blue',
				segmentEvent: MOVING_ENDING_SLOT_EVENT_SEGMENT,
				payload: {
					position: 'index = last'
				}
			},
			icon: {
				name: 'end-vertical.svg',
				alt: 'Иконка треугольной стрелки - вниз в конец',
				titleHover: 'Стрелочка с чертой внизу - символизирует отправление выбранного слота в конец (после всех остальных).'
			}
		}
	]
};

export { configContextMenuSlot };
