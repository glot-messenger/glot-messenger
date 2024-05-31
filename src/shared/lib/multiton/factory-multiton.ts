import { Multiton } from './multiton';

function factoryMultiton(): Multiton {
   return new Multiton();
};

export { factoryMultiton };
