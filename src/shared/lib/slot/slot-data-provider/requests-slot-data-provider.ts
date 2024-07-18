import { BaseProvider } from '../../base-provider';

export const slotRequestModule = BaseProvider.request
	.concatUrl('slots');
