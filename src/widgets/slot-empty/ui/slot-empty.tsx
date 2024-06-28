import React from 'react';
import './slot-empty-style.css';

import {
	ButtonPlus,
	ButtonDots,
	SLOT_EVENT_SEGMENT
} from '../../../shared';

const SlotEmpty: React.FC = () => {
   return (
      <div className='slot-empty'>
         <div className='slot-empty__container'>
						<ButtonDots classes='slot-empty__btn-dots' segmentEvent={SLOT_EVENT_SEGMENT} />
            <ButtonPlus />
         </div>
      </div>
   );
};

export { SlotEmpty };
