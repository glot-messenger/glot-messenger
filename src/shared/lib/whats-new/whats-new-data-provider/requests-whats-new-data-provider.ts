import { BaseProvider } from '../../base-provider';
import { config } from '../../../config';

export const whatsNewRequestModule = BaseProvider.request
	.setUrl(config.endPointForApi)
	.concatUrl('whats-new')
	.requestHeaders({ 'Content-Type': 'application/json' });
