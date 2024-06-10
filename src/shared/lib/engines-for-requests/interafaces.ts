import { ContainerForResultsEngines } from '../container-for-results-engines';

export type EngineRequestFNType = (url: string, params: RequestInit) => Promise<ContainerForResultsEngines>;
