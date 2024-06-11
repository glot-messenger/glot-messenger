import type { IParamsContainerForResultsEngines } from './interafaces';
import { ContainerForResultsEngines } from './container-for-results-engines';

function factoryContainerForResultsEngines<T>(params: IParamsContainerForResultsEngines<T>): ContainerForResultsEngines<T> {
	return new ContainerForResultsEngines(params);
};

export { factoryContainerForResultsEngines };
