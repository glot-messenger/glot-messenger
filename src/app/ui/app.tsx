import React from 'react';
import { Router } from '../router';

const App: React.FC = () => {
   return (
      <div className='wrapper'>
         <div className='wrapper__content block-content'>
            <Router />
         </div>
      </div>
   );
}

export { App };
