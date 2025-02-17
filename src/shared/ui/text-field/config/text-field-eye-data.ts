import type { ITextFieldEyeData } from './interafaces';

const textFieldEyeData: ITextFieldEyeData = {
	"eye-view": {
		icon: {
			name: "eye-view.svg",
			alt: "Иконка открытого глаза. Намекает пользователю, что введенные данные можно открыть у поля.",
			titleHover: "Нажмите, чтобы увидеть закрытое поле ввода."
		}
	},
	"eye-hide": {
		icon: {
			name: "eye-hide.svg",
			alt: "Иконка перечеркнутого глаза. Намекает пользователю, что введенные данные, которые сейчас видны, можно скрыть на экране.",
			titleHover: "Нажмите, чтобы скрыть открытое поле ввода."
		}
	}
};

export { textFieldEyeData };