import React from 'react';
import './button-plus-style.css';

const ButtonPlus: React.FC = () => {
   const handlerClickBtnPlus = (): void => {
		console.log('click button plus');
   };

   return (
      <button onClick={handlerClickBtnPlus} title='Нажмите, чтобы положить виджет в слот колонки' className='button-plus' type='button'>
         <img className='button-plus__icon' src='/assets/icons/plus.svg' alt='Иконка плюса' />
      </button>
   );
};

export { ButtonPlus };
