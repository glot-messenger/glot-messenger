import React from 'react';
import './context-menu-style.css';
import type { IContextMenuProps } from './interafaces';
import type { IElementContextMenu } from '../../../types';

const ContextMenu: React.FC<IContextMenuProps> = ({ data, renderElementFN }) => {
   return (
      <div className='context-menu'>
         <div className='context-menu__container'>
            <ul className='context-menu__list-elements'>
               {data.map((elementData: IElementContextMenu, index: number) => {
                  return (
                     <li className='context-menu__element' key={index}>
                        {renderElementFN(elementData)}
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

export { ContextMenu };
