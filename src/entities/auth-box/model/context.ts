import { createContext } from 'react';
import type { IAuthBoxData } from './interfaces';

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
		path: '/'
	}
};

export const ConditionAuthBoxContext = createContext<IAuthBoxData>(defaultValue);
