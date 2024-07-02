import React from 'react';
import { ButtonWithDynamicBackground } from '../../../shared';
import { configContextMenuColumn } from '../config';

const ContextMenuColumn: React.FC = () => {
	return (
		<div className='context-menu'>
			<div className='context-menu__container'>
				<ul className='context-menu__list-elements'>
					{configContextMenuColumn.map(({ button, icon }, index: number) => {
						return (
							<li className='context-menu__element' key={index}>
								<ButtonWithDynamicBackground titleHover={button.titleHover} type={button.type} typeElement={button.typeElement} classes={button.classes}>
									<span className='context-menu__text'>{button.textBtn}</span>
									<img className='context-menu__icon' src={`/assets/icons/${icon.name}`} alt={icon.alt} title={icon.titleHover} />
								</ButtonWithDynamicBackground>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export { ContextMenuColumn };
