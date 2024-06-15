import { SlotDataProvider } from './slot-data-provider';

function factorySlotDataProvider(): SlotDataProvider {
   return new SlotDataProvider();
};

export { factorySlotDataProvider };
