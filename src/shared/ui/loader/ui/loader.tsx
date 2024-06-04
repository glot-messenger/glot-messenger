import React from 'react';
import './loader-style.css';

const Loader: React.FC = () => {
   return (
      <div className='loader'>
         <div className='loader__container'>
            <span className='loader__element'></span>
         </div>
      </div>
   );
};

export { Loader };
