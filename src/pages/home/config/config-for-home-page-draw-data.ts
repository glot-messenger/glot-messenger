import type { IConfigForHomePageDrawData } from './interafaces';

import {
	AUTH,
	SIGN_IN_SEGMENT,
	SIGN_UP_SEGMENT
} from '../../../shared';

const configForHomePageDrawData: IConfigForHomePageDrawData = {
	title: {
		first: 'Пора перестать использовать Discord!',
		second: 'У нас есть все, что вам нужно!!!'
	},
	subTitle: 'Мы первый отечественный мессенджер с человеческим лицом для вашей повседневной работы и развлечения. Мы реализуем модель win-win, поэтому любой создатель контента не уйдет от нас обиженным: у нас есть честная модель монетизации. Мы верим в совместное сотрудничество с нашими пользователями. Мы не собираем информацию о вас и не отождествляем вас в интернете как это делает Discord и его аналоги, поэтому будьте уверены на все 100% в своей анонимности и безопасности. Мы первые в России, кто смещает вектор благополучия в сторону пользователей. Коммуникационные технологии еще не были настолько притягательными.',
	data: [
		{
			link: {
				titleHover: 'Нажмите, чтобы перейти на страницу регистрации и создать учетную запись в GLOT',
				path: `${AUTH}/${SIGN_UP_SEGMENT}`
			},
			btn: {
				typeBtn: 'pretty',
				icon: {
					name: 'registration-list.svg',
					alt: 'Иконка регистрационного листа'
				},
				text: 'Зарегистрироваться'
			}
		},
		{
			link: {
				titleHover: 'Нажмите, чтобы перейти на страницу входа в GLOT',
				path: `${AUTH}/${SIGN_IN_SEGMENT}`
			},
			btn: {
				typeBtn: 'classic',
				icon: {
					name: 'sign-in-door.svg',
					alt: 'Иконка двери с направленной на нее стрелочкой'
				},
				text: 'Войти'
			}
		}
	]
};

export { configForHomePageDrawData };
