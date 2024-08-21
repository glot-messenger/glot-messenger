import React from 'react';
import './context-menu-style.css';
import type { IContextMenuProps } from './interafaces';
import type { IElementContextMenu } from '../../../types';

const ContextMenu: React.FC<IContextMenuProps> = ({ data, renderElementFN, title, subTitle, icon }) => {
   return (
      <div className='context-menu'>
         <div className='context-menu__container'>
				<div className='context-menu__header'>
					<img className='context-menu__icon-title' src={`/assets/icons/${icon.name}`} alt={icon.alt} />
					<h2 className='context-menu__title'>{title}</h2>
					<p className='context-menu__sub-title'>{subTitle}</p>
					<span className='context-menu__element-title'></span>
				</div>
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
