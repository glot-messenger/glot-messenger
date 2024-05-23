import React from 'react';
import './footer-style.css';

import {
	HrElement,
	Logo
} from '../../../shared';

const Footer: React.FC = () => {
   return (
      <footer className='footer'>
         <div className='footer__wrapper'>
            <div className='footer__container'>
					<Logo />
               <HrElement />
					FOOTE APPLICATION
            </div>
         </div>
      </footer>
   );
};

export { Footer };
