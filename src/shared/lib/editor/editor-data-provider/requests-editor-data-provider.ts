import { BaseProvider } from '../../base-provider';
import { config } from '../../../config';

export const editorRequestModule = BaseProvider.request.setUrl(config.endPointForApi).concatUrl('settings-editors');
