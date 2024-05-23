import React from 'react';
import './auth-box-info-style.css';

import {
	LinkElement,
	HOME
} from '../../../shared';

import type { IAuthBoxInfoProps } from './interafaces';

const AuthBoxInfo: React.FC<IAuthBoxInfoProps> = ({ titleHover, name, alt, path, title, subTitle, classesParent }) => {
	const correctPath: string = path ? path : HOME;

   return (
      <div className={`${classesParent}__info info-box-auth`}>
         <LinkElement classesValue='info-box-auth__link-icon' to={correctPath} titleHover={titleHover}>
            <img className='info-box-auth__icon' src={`/assets/icons/${name}`} alt={alt} />
         </LinkElement>
         <h2 className='info-box-auth__title-phrase'>{title}</h2>
         <p className='info-box-auth__sub-phrase'>{subTitle}</p>
      </div>
   );
};

export { AuthBoxInfo };
