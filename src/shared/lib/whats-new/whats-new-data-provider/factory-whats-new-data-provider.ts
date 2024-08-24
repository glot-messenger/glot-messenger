import { WhatsNewDataProvider } from './whats-new-data-provider';

function factoryWhatsNewDataProvider(): WhatsNewDataProvider {
   return new WhatsNewDataProvider();
};

export { factoryWhatsNewDataProvider };
