import type { IAuthBoxData } from './interafaces';

import {
	HOME,
	AUTH,
	SIGN_IN_SEGMENT
} from "../../../../shared";

const defaultAuthBoxDataCondition: IAuthBoxData = {
	title: 'Ууупс... Что-то пошло не так...',
	subTitle: 'Пират Ток Фикса с пустынного астероида атаковал нас',
	titleHover: 'Команда разработчиков уже разбирается в вопросе. Виновник будет наказан!',
	phrase: 'По приемнику поступает сообщение:',
	subPhrase: '"Я не бандит, а элитный путешественник Галактики!!!"',
	icon: {
		name: 'glot.svg',
		alt: 'Логотип мессенджера GLOT',
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
