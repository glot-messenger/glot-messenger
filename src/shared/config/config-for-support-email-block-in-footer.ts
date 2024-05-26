import type { IConfigForLinkBlock } from './interafaces';

const configForSupportEmailBlockInFooter: IConfigForLinkBlock = {
	text: 'Со всеми предложениями, связанными с работой мессенджера, обращайтесь на почту:',
	link: {
		text: 'glot.messenger@yandex.ru',
		path: 'mailto:glot.messenger@yandex.ru',
		titleHover: 'Нажмите, что написать нам на почту'
	}
};

export { configForSupportEmailBlockInFooter };
