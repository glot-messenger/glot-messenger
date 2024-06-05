import { ParamsRequest } from '../params-request';
import type { EngineRequestFNType } from '../engines-for-requests';

import type {
   BaseResponseEngineClass,
   IResponseEngine
} from '../engines-for-response';

class RequestModule {
   static url: null | string = null;

	static method: null | string = null;

   static dataType: null | string = null;

   static savePayload: null | any = null;

   static strategyRequestFN: null | EngineRequestFNType = null;

   static strategyResponse: null | BaseResponseEngineClass = null;

	// static instanceCache: null | ICache & ICacheConcrate = null;

	// static keyCache: null | string = null;

   static get post(): typeof RequestModule {
		return class extends this {
			static override method = 'POST';
		};
	};

   static get get(): typeof RequestModule {
      return class extends this {
         static override method = 'GET';
      };
   };

   static get jsonFormat(): typeof RequestModule {
		return class extends this {
			static override dataType = 'json';
		};
	};

   static setUrl(urlString: string): typeof RequestModule {
		return class extends this {
			static override url = urlString;
		};
	};

   static body<T extends any>(payload: T): typeof RequestModule {
		return class extends this {
			static override savePayload = payload;
		};
	};

   static using(strategy: EngineRequestFNType): typeof RequestModule {
		return class extends this {
			static override strategyRequestFN = strategy;
		};
	};

   static usingForResponse(strategy: BaseResponseEngineClass): typeof RequestModule {
		return class extends this {
			static override strategyResponse = strategy;
		};
	};

   static leadFormat(payload: any): any {
      // Делает предварительную обработку данных перед запросом, доводит их до определенного вида
		let result = payload;

		switch(this.dataType) {
			case 'json':
				result = JSON.stringify(payload);
			break;
			case 'native':
				result = payload;
			break;
		}

		return result;
	};

   static async create(): Promise<IResponseEngine | unknown> {
		// if (this.keyCache !== null) {
		// 	const dataCache = this.instanceCache.get(this.keyCache);

		// 	if (dataCache && (dataCache instanceof Response) && this.strategyResponse) {
		// 		return new this.strategyResponse(dataCache);
		// 	}

		// 	if (dataCache) {
		// 		return dataCache;
		// 	}
		// }

      if (this.url === null) {
         throw new Error('Url request is not defined...');
      }

      if (this.method === null) {
         throw new Error('Method request is not defined...');
      }

      if (this.dataType === null) {
         throw new Error('DataType request is not defined...');
      }

		if (this.strategyRequestFN === null) {
			throw new Error('Strategy request is not defined...');
		}

      // Собирает все в кучу: method запроса, данные запроса
		const params = new ParamsRequest(
			this.method,
			this.leadFormat(this.savePayload)
		);

		let data = await this.strategyRequestFN(this.url, params);

		// if (this.instanceCache) {
		// 	this.instanceCache.set(0, data);
		// }

		if (this.strategyResponse) {
			return new this.strategyResponse(data);
		}

		return data;
	};
};

export { RequestModule };
