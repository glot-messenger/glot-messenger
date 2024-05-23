import {
   HOME,
   AUTH
} from '../router-paths';

import { SIGN_IN_SEGMENT } from '../router-paths-segments';
import type { IAuthBoxData } from './interafaces';

const defaultAuthBoxDataCondition: IAuthBoxData = {
	title: 'Ууупс... Что-то пошло не так...',
	subTitle: 'Пират Глот с планеты Катрук атаковал нас',
	titleHover: 'Команда разработчиков уже разбирается в вопросе. Виновник будет наказан!',
	phrase: 'По приемнику поступает сообщение:',
	subPhrase: '"Я не бандит, а благородный пират!!!"',
	icon: {
		name: 'glot.svg',
		alt: 'Пират Глот с планеты Катрук',
		titleHover: 'Нажмите, чтобы перейти на главную!',
		path: HOME
	},
	links: {
		title: 'Быстрый переход:',
		data: [
			{
				text: 'Перейти на страницу входа',
				pathConfig: {
					text: 'Войти',
					path: `${AUTH}/${SIGN_IN_SEGMENT}`,
					titleHover: 'Нажмите, чтобы перейти на страницу входа'
				}
			}
		]
	}
};

export { defaultAuthBoxDataCondition };
