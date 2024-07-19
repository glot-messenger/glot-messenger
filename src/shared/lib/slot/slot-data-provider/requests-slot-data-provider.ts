import { BaseProvider } from '../../base-provider';
import { config } from '../../../config';

export const slotRequestModule = BaseProvider.request
	.setUrl(config.endPointForApi)
	.concatUrl('slots')
	.requestHeaders({ 'Content-Type': 'application/json' });
