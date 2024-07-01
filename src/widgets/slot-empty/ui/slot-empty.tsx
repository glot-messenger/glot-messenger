import React from 'react';
import './slot-empty-style.css';
import type { ISlotEmptyProps } from './interafaces';

import {
	ButtonPlus,
	ButtonDots,
	SLOT_EVENT_SEGMENT
} from '../../../shared';

const SlotEmpty: React.FC<ISlotEmptyProps> = ({ columnId, _id }) => {
   return (
      <div className='slot-empty'>
         <div className='slot-empty__container'>
						<ButtonDots classes='slot-empty__btn-dots' segmentEvent={SLOT_EVENT_SEGMENT} data={{ columnId, slotId: _id }} />
            <ButtonPlus />
         </div>
      </div>
   );
};

export { SlotEmpty };
