import { createContext } from 'react';
import type { IAuthBoxData } from '../../../shared';
import { defaultAuthBoxDataCondition } from '../../../shared';

export const ConditionAuthBoxContext = createContext<IAuthBoxData>(defaultAuthBoxDataCondition);
