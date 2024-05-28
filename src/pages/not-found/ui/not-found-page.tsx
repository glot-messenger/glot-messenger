import React from 'react';
import './not-found-style.css';

import {
	Header,
	Footer
} from '../../../widgets';

import {
	LinkElement,
	ButtonPretty
} from '../../../shared';

const NotFoundPage: React.FC = () => {
	return (
		<div className='not-found'>
			<Header />
			<div className='not-found__content'>
				<div className='not-found__container'>
					<div className='not-found__column'>
						<h1 className='not-found__title'>Заблудились?</h1>
						<div className='not-found__sub-title'>Кажется, что космический пират Глот в обличии доктора Верховенцева смог ввести вас в заблуждение и направить по ложному следу. Пока он потирает руки и ехидно посмеивается, вам требуется успокоиться и подумать над тем, куда вы хотите попасть. Мы можем предложить вам сделать гиперпрыжок и вернуться на главную страницу.</div>
						<LinkElement>
							<ButtonPretty>
								
							</ButtonPretty>
						</LinkElement>
					</div>
					<div className='not-found__column'>
						
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export { NotFoundPage };
