import { createContext } from 'react';
import type { IAuthBoxData } from '../../../widgets';
import { defaultAuthBoxDataCondition } from '../../../widgets';

export const ConditionAuthBoxContext = createContext<IAuthBoxData>(defaultAuthBoxDataCondition);
