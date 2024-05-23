import React from 'react';
import './link-element-style.css';
import { Link } from 'react-router-dom';
import type { ILinkElementProps } from './interafaces';

const LinkElement: React.FC<ILinkElementProps> = ({ to, titleHover, classesValue, children, text }) => {
   const classes: string = 'link' + (classesValue ? ` ${classesValue}` : '');

   return (
      <Link to={to} title={titleHover} className={classes}>
         {children ?
            children :
            text
         }
      </Link>
   );
};

export { LinkElement };
