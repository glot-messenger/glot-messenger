import { createContext } from 'react';
import type { IAuthBoxData } from './interfaces';

import {
	HOME,
	AUTH,
	SIGN_IN_SEGMENT
} from '../../../shared';

const defaultValue: IAuthBoxData = {
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
	links: [
		{
			text: 'Перейти на страницу входа',
			pathConfig: {
				text: 'Войти',
				path: `${AUTH}/${SIGN_IN_SEGMENT}`
			}
		}
	]
};

export const ConditionAuthBoxContext = createContext<IAuthBoxData>(defaultValue);
