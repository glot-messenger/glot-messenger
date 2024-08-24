import React, { useEffect } from 'react';
import type { IWhatsNewLoader } from './interafaces';
import { observer } from 'mobx-react-lite';
import { $whatsNewStore } from '../../../entities';

import {
	Loader,
	MessageLite
} from '../../../shared';

const WhatsNewLoader: React.FC<IWhatsNewLoader> = observer(({ children }) => {
	// STORE данных новостей, которые отрисовываются в модалке 'Что нового?'
	const { isLoading, isError, messageError, getWhatsNewAction } = $whatsNewStore;

	useEffect(() => {
		if (isLoading) {
			getWhatsNewAction();
		}
	}, [isLoading]);

	return (
		<React.Fragment>
			{
				isError ?
					<MessageLite text={messageError} /> :
				isLoading ?
					<Loader /> :
					children
			}
		</React.Fragment>
	);
});

export { WhatsNewLoader };