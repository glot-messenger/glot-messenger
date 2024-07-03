import React from 'react';
import './logo-glot-style.css';

const LogoGlot: React.FC = () => {
	const handlerClick = () => {
		console.log('click logo');
	};

	return (
		<div className='logo-glot'>
			<div className='logo-glot__container'>
				<button onClick={handlerClick} type='button' className='logo-glot__btn'>
					<img className='logo-glot__icon' src='/assets/icons/logo/glot5.svg' alt='Иконка сервиса GLOT' />
				</button>
			</div>
			<span className='logo-glot__element'></span>
		</div>
	);
};

export { LogoGlot };
