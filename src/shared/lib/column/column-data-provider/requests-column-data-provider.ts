import { BaseProvider } from '../../base-provider';
import { config } from '../../../config';

export const columnRequestModule = BaseProvider.request
	.setUrl(config.endPointForApi)
	.concatUrl('columns')
	.requestHeaders({ 'Content-Type': 'application/json' });
