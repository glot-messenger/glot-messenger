import { ContainerForResultsEngines } from '../container-for-results-engines';

export type EngineRequestFNType<T> = (url: string, params: RequestInit) => Promise<ContainerForResultsEngines<T>>;
