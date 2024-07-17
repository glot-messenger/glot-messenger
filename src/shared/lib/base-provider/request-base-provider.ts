import { RequestModule } from '../request-module';
import { fetchEngine } from '../engines-for-requests';
import { BaseResponseEngineFetch } from '../engines-for-response';

// Настраиваем базовый движок запросов для всех реквестов и базовый движок ответов, когда данные пришли на клиент
export const baseRequestModule = RequestModule
	.using(fetchEngine)
	.usingForResponse(BaseResponseEngineFetch);
