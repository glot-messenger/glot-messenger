import React from 'react';
import './button-dots-style.css';

const ButtonDots: React.FC = () => {
   const handlerClickBtn = () => {
      console.log('click three dots');
   };

   return (
      <button onClick={handlerClickBtn} type='button' className='button-dots'>
         <span className='button-dots__dot'>•</span>
         <span className='button-dots__dot'>•</span>
         <span className='button-dots__dot'>•</span>
      </button>
   );
};

export { ButtonDots };
