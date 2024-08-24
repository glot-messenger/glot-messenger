import React from 'react';
import './whats-new-block-style.css';
import { WhatsNewLoader } from '../../../features';
import { News } from './news';
import { WhatsNewSocialNetwork } from './whats-new-social-network';
import { $whatsNewStore } from '../../../entities';

const WhatsNewBlock: React.FC = () => {
	const { whatsNew } = $whatsNewStore.data;

	return (
		<React.Fragment>
			<div className='whats-new-block'>
				<div className='whats-new-block__container'>
					{whatsNew.map((elementData: any, index: number) => {
						return (
							<News key={elementData._id} { ...elementData } index={index} />
						);
					})}
				</div>
			</div>
			<WhatsNewSocialNetwork />
		</React.Fragment>
	);
};

const WhatsNewBLockWrapper: React.FC = () => {
	return (
		<WhatsNewLoader>
			<WhatsNewBlock />
		</WhatsNewLoader>
	);
};

export { WhatsNewBLockWrapper };
