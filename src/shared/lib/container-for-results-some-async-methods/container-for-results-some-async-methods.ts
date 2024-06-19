import type { IContainerForResultsSomeAsyncMethods } from './interafaces';

class ContainerForResultsSomeAsyncMethods implements IContainerForResultsSomeAsyncMethods {
   message: string;

   isError: boolean;

   data: any;

   constructor({ isError, message, data }: any) {
      this.message = message;
      this.isError = isError;
      this.data = data;
   }
};

export { ContainerForResultsSomeAsyncMethods };
