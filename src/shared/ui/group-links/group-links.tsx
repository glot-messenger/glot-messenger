import React from 'react';
import './group-links-style.css';
import type { IGroupLinksProps, IElement } from './interafaces';
import { LinkElement } from '../link-element';

const GroupLinks: React.FC<IGroupLinksProps> = ({ linksGroup }) => {
   const { title, data } = linksGroup;

   return (
      <div className='group-links'>
         <div className='group-links__content'>
            {title && <h3 className='group-links__title'>{title}</h3>}
            <div className='group-links__container'>
               {data.map((el: IElement, index: number) => {
                  const { path, text, titleHover } = el.pathConfig;

                  return (
                     <div className='group-links__element' key={index}>
                        <span className='group-links__txt'>
                           {el.text}
                        </span>
                        <LinkElement typeElement='Link' classesValue='group-links__link' titleHover={titleHover} to={path} text={text} />
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export { GroupLinks };
