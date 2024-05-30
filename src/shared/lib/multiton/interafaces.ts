export interface IMultiton<T = unknown> {
   storeSingletons: Map<string, T>;
   set: (key: string, instance: T) => void;
   get: (key: string) => undefined | T;
};
