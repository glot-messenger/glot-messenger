import { ContainerForResultsSomeAsyncMethods } from './container-for-results-some-async-methods';

function factoryContainerForResultsSomeAsyncMethods(config: any): ContainerForResultsSomeAsyncMethods {
   return new ContainerForResultsSomeAsyncMethods(config);
};

export { factoryContainerForResultsSomeAsyncMethods };
