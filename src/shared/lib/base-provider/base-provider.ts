import type { IDataProvider } from '../../types';
import { baseRequestModule } from './request-base-provider';

// Не может быть Singleton, т.к. его метод constructor() используется для инициализации разных Providers
// В случае единой точки, если мы его сделаем Singleton, специфичные провайдеры перестанут быть уникальными, они проинициализируются одним провайдером и везде его будут подсовывать

class BaseProvider implements IDataProvider {
	static request = baseRequestModule;

	async get(config?: any): Promise<any> {
		console.log('Implement the get() method in your specified provider. Now it is taken from the Base Provider.');

		return ({
			message: 'Implement the get() method in your specified provider. Now it is taken from the Base Provider.'
		});
	};

	async set(data: any): Promise<any> {
		console.log('Implement the set() method in your specified provider. Now it is taken from the Base Provider.');

		return ({
			message: 'Implement the set() method in your specified provider. Now it is taken from the Base Provider.',
			value: data
		});
	};

	async update(): Promise<any> {
		console.log('Implement the update() method in your specified provider. Now it is taken from the Base Provider.');

		return ({
			message: 'Implement the update() method in your specified provider. Now it is taken from the Base Provider.'
		});
	};
};

export { BaseProvider };
