import React from 'react';
import './signature-style.css';
import { configSignatureBlock } from '../config';

const Signature: React.FC = () => {
   const { text, infoAuthor, icon } = configSignatureBlock;

   return (
      <div className='signature'>
         <p className='signature__phrase'>"{text}".</p>
         <div className='signature__author'>
            <span className='signature__text'>{infoAuthor}</span>
            <img className='signature__icon' src={`/assets/icons/${icon.name}`} alt={icon.alt} />
         </div>
      </div>
   );
};

export { Signature };
