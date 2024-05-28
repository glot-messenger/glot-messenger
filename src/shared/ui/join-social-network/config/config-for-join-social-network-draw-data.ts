import type { IConfigJoinSocialNetwork } from './interafaces';

const configForJoinSocialNetworkDrawData: IConfigJoinSocialNetwork = {
	text: 'Присоединяйтесь:',
	data: [
		{
			name: 'vk.svg',
			alt: 'Иконка сервиса VK',
			titleHover: 'Нажмите, чтобы перейти в нашу группу в VK',
			path: 'https://vk.com/'
		},
		{
			name: 'telegram.svg',
			alt: 'Иконка сервиса Telegram',
			titleHover: 'Нажмите, чтобы перейти в наш Telegram-канал',
			path: 'https://web.telegram.org/k/'
		},
		{
			name: 'dzen.svg',
			alt: 'Иконка сервиса Дзен',
			titleHover: 'Нажмите, чтобы перейти в нашу группу на Дзене',
			path: 'https://dzen.ru/'
		},
		{
			name: 'pikabu.svg',
			alt: 'Иконка сервиса Пикабу',
			titleHover: 'Нажмите, чтобы перейти в наши социальные сети на Пикабу',
			path: 'https://pikabu.ru/'
		},
		{
			name: 'instagram.svg',
			alt: 'Иконка сервиса Instagram',
			titleHover: 'Нажмите, чтобы перейти в наши социальные сети в Instagram',
			path: 'https://ru.wikipedia.org/wiki/Instagram'
		},
		{
			name: 'habr.svg',
			alt: 'Иконка сервиса Habr',
			titleHover: 'Нажмите, чтобы перейти в наши социальные сети на Хабре',
			path: 'https://habr.com/ru/articles/'
		},
		{
			name: 'dtf.svg',
			alt: 'Иконка сервиса DTF',
			titleHover: 'Нажмите, чтобы перейти в наши социальные сети в DTF',
			path: 'https://dtf.ru/'
		}
	]
};

export { configForJoinSocialNetworkDrawData };