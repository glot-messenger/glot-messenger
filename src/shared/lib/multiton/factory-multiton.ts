import { Multiton } from './multiton';

function factoryMultiton<T>(): Multiton<T> {
   return new Multiton<T>();
};

export { factoryMultiton };
