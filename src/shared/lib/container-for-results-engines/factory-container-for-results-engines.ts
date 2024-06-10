import type { IParamsContainerForResultsEngines } from './interafaces';
import { ContainerForResultsEngines } from './container-for-results-engines';

function factoryContainerForResultsEngines(params: IParamsContainerForResultsEngines): ContainerForResultsEngines {
	return new ContainerForResultsEngines(params);
};

export { factoryContainerForResultsEngines };
