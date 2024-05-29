import { HOME } from "../../../shared";
import type { IConfigForClassicBlock } from './interafaces';

const configForLogoInFooter: IConfigForClassicBlock = {
	text: 'GLOT',
	icon: {
		name: 'glot.svg',
		alt: 'Иконка сервиса GLOT',
		titleHover: 'Нажмите, чтобы перейти на главную.',
		path: HOME
	}
};

export { configForLogoInFooter };