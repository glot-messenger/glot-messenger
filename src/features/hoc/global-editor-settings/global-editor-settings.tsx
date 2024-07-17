import React, { useState, useEffect } from 'react';
import type { IGlobalEditorSettings } from './interafaces';
import { observer } from 'mobx-react-lite';

import {
	Loader,
	MessageLite
} from '../../../shared';

import {
	$settingsEditorStore,
	$columnsEditorStore
} from '../../../entities';

const GlobalEditorSettings: React.FC<IGlobalEditorSettings> = observer(({ children }) => {
	const [globalLoader, setGlobalLoader] = useState<boolean>(true);

	const [globalError, setGlobalError] = useState<string>('');

	const {
		isLoading: isLoadingSettingsEditor,
		isError: isErrorSettingsEditor,
		messageError: messageSettingsEditor,
		getSettingsEditorAction,
		data: dataSettingsEditor
	} = $settingsEditorStore;

	const {
		isLoading: isLoadingColumnsEditor,
		isError: isErrorColumnsEditor,
		messageError: messageColumnsEditor,
		getColumnsEditorAction
	} = $columnsEditorStore;

	useEffect(() => {
		if (isErrorSettingsEditor) {
			setGlobalError(messageSettingsEditor);
			setGlobalLoader(false);

		} else if (isLoadingSettingsEditor) {
			getSettingsEditorAction({ userId: '1719229880595-user-id' }); // Пользователь, который есть в базе
			setGlobalError('');

		} else if (!isLoadingSettingsEditor) {
			getColumnsEditorAction({ settingId: dataSettingsEditor?.settingsEditor?._id });
			setGlobalError('');
		}
	}, [isLoadingSettingsEditor, messageSettingsEditor, isErrorSettingsEditor, dataSettingsEditor]);

	return (
		<React.Fragment>
			{
				globalError ?
					<MessageLite text={globalError} /> :
				globalLoader ?
					<Loader /> :
					children
			}
		</React.Fragment>
	);
});

export { GlobalEditorSettings };
