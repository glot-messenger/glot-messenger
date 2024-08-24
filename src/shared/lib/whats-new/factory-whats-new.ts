import { WhatsNew } from './whats-new';

function factoryWhatsNew(): WhatsNew {
   return new WhatsNew();
};

export { factoryWhatsNew };
