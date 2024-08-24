import React from 'react';
import './signature-style.css';
import { configSignatureBlock } from '../config';
import { config } from '../../../shared';

const Signature: React.FC = () => {
   const { text, infoAuthor, icon } = configSignatureBlock;

   return (
      <div className='signature'>
         <p className='signature__phrase'>"{text}".</p>
         <div className='signature__author'>
            <span className='signature__text'>{infoAuthor}</span>
            <img className='signature__icon' src={`${config.endPointForStatics}assets/icons/${icon.name}`} alt={icon.alt} />
         </div>
      </div>
   );
};

export { Signature };
