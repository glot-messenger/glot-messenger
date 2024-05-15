import React from 'react';
import './form-component-style.css';
import type { IFormComponentProps } from '../interafaces';

const FormComponent: React.FC<IFormComponentProps> = ({ children, data, onSubmit }) => {
   const newChildrens = React.Children.map(children, (child) => {
      if (!child) {
         return child;
      }

      if (typeof child !== 'object') {
         return child;
      }

      const v: React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal = child;

      console.log(child);
   });

   return (
      <form className='form'>
         {children}
      </form>
   );
};

export { FormComponent };
