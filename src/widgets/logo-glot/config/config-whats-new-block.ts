import type { IConfigWhatsNewBlock } from './interafaces';

const configWhatsNewBlock: IConfigWhatsNewBlock = {
	title: 'Что нового?',
	labels: {
		'0': {
			text: 'new',
			icon: {
				alt: 'Иконка молнии. Символизирует последнюю новость.',
				name: 'lightning.svg'
			},
			color: '#ff4606'
		},
		'1': {
			text: 'prev',
			icon: {
				alt: 'Стрелочка направлена влево. Символизирует предыдущую новость.',
				name: 'arrow-left-with-container.svg'
			},
			color: '#94ad5f'
		},
		'2': {
			text: 'old',
			icon: {
				alt: 'Песочные часы. Символизируют старую новость. В мессенджере это новость под номером 3.',
				name: 'hourglass.svg'
			},
			color: '#7666a6'
		}
	}
};

export { configWhatsNewBlock };
