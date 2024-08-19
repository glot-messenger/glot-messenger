import type { IConfigContextMenu } from '../../types';

import {
	ADD_SLOT_EVENT_SEGMENT,
	DELETE_COLUMN_EVENT_SEGMENT,
	UPDATE_COLUMN_EVENT_SEGMENT,
	MOVING_LEFT_COLUMN_EVENT_SEGMENT,
	MOVING_RIGHT_COLUMN_EVENT_SEGMENT,
	MOVING_BEGINNING_COLUMN_EVENT_SEGMENT,
	MOVING_ENDING_COLUMN_EVENT_SEGMENT
} from '../../core';

const configContextMenuColumn: IConfigContextMenu = {
	title: 'Настройки колонки',
	subTitle: 'В этом месте вы можете очень гибко отстроить колонку',
	icon: {
		name: 'settings.svg',
		alt: 'Иконка шестеренки'
	},
	data: [
		{
			button: {
				typeElement: 'button',
				textBtn: 'Добавить слот',
				type: 'button',
				titleHover: 'Нажмите, чтобы добавить еще один слот в колонку.',
				classes: 'context-menu__btn blue-blue',
				segmentEvent: ADD_SLOT_EVENT_SEGMENT,
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
				textBtn: 'Удалить колонку',
				type: 'button',
				titleHover: 'Нажмите, чтобы удалить эту колонку.',
				classes: 'context-menu__btn red-red',
				// segmentEvent: DELETE_COLUMN_EVENT_SEGMENT,
				payload: {}
			},
			icon: {
				name: 'delete-urn.svg',
				alt: 'Иконка урна',
				titleHover: 'Урна - удалить.'
			}
		},
		{
			button: {
				typeElement: 'button',
				textBtn: 'Переключить режим колонки на закрытый для изменений',
				type: 'button',
				titleHover: 'Нажмите, чтобы включить режим колонки - закрытый для изменений.',
				classes: 'context-menu__btn gray-blue',
				segmentEvent: UPDATE_COLUMN_EVENT_SEGMENT,
				payload: {
					accessForChanges: false
				}
			},
			icon: {
				name: 'lock-block.svg',
				alt: 'Закрытый замочек',
				titleHover: 'Замок - закрытый.'
			}
		},
		{
			button: {
				typeElement: 'button',
				textBtn: 'Переключить режим колонки на открытый для изменений',
				type: 'button',
				titleHover: 'Нажмите, чтобы включить режим колонки - открытый для изменений.',
				classes: 'context-menu__btn gray-blue',
				segmentEvent: UPDATE_COLUMN_EVENT_SEGMENT,
				payload: {
					accessForChanges: true
				}
			},
			icon: {
				name: 'lock-open.svg',
				alt: 'Открытый замочек',
				titleHover: 'Замок - открытый.'
			}
		},
		{
			button: {
				typeElement: 'button',
				textBtn: 'Отправить колонку влево',
				type: 'button',
				titleHover: 'Нажмите, чтобы отправить колонку влево.',
				classes: 'context-menu__btn gray-blue',
				segmentEvent: MOVING_LEFT_COLUMN_EVENT_SEGMENT,
				payload: {
					position: 'index - 1'
				}
			},
			icon: {
				name: 'arrow-left.svg',
				alt: 'Стрелка, указывающая влево',
				titleHover: 'Стрелка - влево.'
			}
		},
		{
			button: {
				typeElement: 'button',
				textBtn: 'Отправить колонку вправо',
				type: 'button',
				titleHover: 'Нажмите, чтобы отправить колонку вправо.',
				classes: 'context-menu__btn gray-blue',
				segmentEvent: MOVING_RIGHT_COLUMN_EVENT_SEGMENT,
				payload: {
					position: 'index + 1'
				}
			},
			icon: {
				name: 'arrow-right.svg',
				alt: 'Стрелка, указывающая вправо',
				titleHover: 'Стрелка - вправо.'
			}
		},
		{
			button: {
				typeElement: 'button',
				textBtn: 'Отправить колонку в начало',
				type: 'button',
				titleHover: 'Нажмите, чтобы отправить колонку в начало.',
				classes: 'context-menu__btn gray-blue',
				segmentEvent: MOVING_BEGINNING_COLUMN_EVENT_SEGMENT,
				payload: {
					position: 'index = first'
				}
			},
			icon: {
				name: 'flag.svg',
				alt: 'Флаг',
				titleHover: 'Флаг - символизирует начальную отметку.'
			}
		},
		{
			button: {
				typeElement: 'button',
				textBtn: 'Отправить колонку в конец',
				type: 'button',
				titleHover: 'Нажмите, чтобы отправить колонку в конец.',
				classes: 'context-menu__btn gray-blue',
				segmentEvent: MOVING_ENDING_COLUMN_EVENT_SEGMENT,
				payload: {
					position: 'index = last'
				}
			},
			icon: {
				name: 'end-horizon.svg',
				alt: 'Стрелочка указывает в конец',
				titleHover: 'Стрелка - символизирует конец построения колонок.'
			}
		}
	]
};

export { configContextMenuColumn };
