import { RequestModule } from '../request-module';
import { fakeEngine } from '../engines-for-requests';

export const baseRequestModule = RequestModule.using(fakeEngine).setUrl('/');


console.log(baseRequestModule.url, 'URL');
