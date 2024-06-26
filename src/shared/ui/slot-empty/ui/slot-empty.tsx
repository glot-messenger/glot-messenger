import React from 'react';
import './slot-empty-style.css';
import { ButtonPlus } from '../../button-plus';

const SlotEmpty: React.FC = () => {
   return (
      <div className='slot-empty'>
         <div className='slot-empty__container'>
            <ButtonPlus />
         </div>
      </div>
   );
};

export { SlotEmpty };
