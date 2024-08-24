import type { IConfigForNotFoundPageDrawData } from './interafaces';
import { HOME } from '../../../shared';

const configForNotFoundPageDrawData: IConfigForNotFoundPageDrawData = {
	title: 'Заблудились?',
	subTitle: 'Кажется, что космический пират Ток Фикса в человеческом обличии смог ввести вас в заблуждение и направить по ложному следу. Если верить вашим бортовым приборам, то вы находитесь на планете Альткоин. Пока Ток Фикса потирает руки и ехидно посмеивается, вам требуется успокоиться и подумать над тем, куда вы хотите попасть. Мы можем предложить вам сделать гиперпрыжок и вернуться на главную страницу.',
	link: {
		titleHover: 'Нажмите, чтобы перейти на главную',
		path: HOME
	},
	btn: {
		icon: {
			name: 'home.svg',
			alt: 'Иконка домика с крышей'
		},
		text: 'Быстрый переход на главную'
	},
	icon: {
		name: 'spaceship.svg',
		alt: 'Летающая тарелка потерпела крушение'
	}
};

export { configForNotFoundPageDrawData };
