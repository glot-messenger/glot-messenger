import { RequestModule } from '../request-module';
import { fetchEngine } from '../engines-for-requests';

export const baseRequestModule = RequestModule.using(fetchEngine);
