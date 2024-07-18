import React, { useState, useEffect } from 'react';
import type { IGlobalEditorSettings } from './interafaces';
import { observer } from 'mobx-react-lite';

import {
	Loader,
	MessageLite
} from '../../../shared';

import {
	$settingsEditorStore,
	$columnsEditorStore,
	$slotsEditorStore
} from '../../../entities';

const GlobalEditorSettings: React.FC<IGlobalEditorSettings> = observer(({ children }) => {
	const [globalLoader, setGlobalLoader] = useState<boolean>(true);

	const [globalMessageError, setGlobalMessageError] = useState<string>('');

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
		getColumnsEditorAction,
	} = $columnsEditorStore;

	const {
		isLoading: isLoadingSlotsEditor,
		isError: isErrorSlotsEditor,
		messageError: messageSlotsEditor,
		getSlotsEditorAction
	} = $slotsEditorStore;

	useEffect(() => {
		if (isErrorSettingsEditor) {
			setGlobalMessageError(messageSettingsEditor);
			setGlobalLoader(false);

		} else if (isErrorColumnsEditor) {
			setGlobalMessageError(messageColumnsEditor);
			setGlobalLoader(false);

		} else if (isErrorSlotsEditor) {
			setGlobalMessageError(messageSlotsEditor);
			setGlobalLoader(false);

		} else if (isLoadingSettingsEditor) {
			getSettingsEditorAction({ userId: '1719229880595-user-id' }); // Пользователь, который есть в базе
			setGlobalMessageError('');

		} else if (!isLoadingSettingsEditor && isLoadingColumnsEditor) {
			getColumnsEditorAction({ settingId: dataSettingsEditor?.settingsEditor?._id });
			setGlobalMessageError('');

		} else if (!isLoadingSettingsEditor && !isLoadingColumnsEditor && isLoadingSlotsEditor) {
			getSlotsEditorAction({ columnsIds:  dataSettingsEditor?.settingsEditor?.columns });
			setGlobalMessageError('');

		} else if (!isLoadingSettingsEditor && !isLoadingColumnsEditor && !isLoadingSlotsEditor) {
			setGlobalLoader(false);
			setGlobalMessageError('');

		} else {
			setGlobalLoader(false);
			setGlobalMessageError('Something went wrong when getting your editor`s settings. The development team is already figuring out the reason... We apologize...');
		}
	}, [
		isLoadingSettingsEditor,
		messageSettingsEditor,
		isErrorSettingsEditor,
		dataSettingsEditor,
		isErrorColumnsEditor,
		messageColumnsEditor,
		isLoadingColumnsEditor,
		isErrorSlotsEditor,
		messageSlotsEditor,
		isLoadingSlotsEditor
	]);

	return (
		<React.Fragment>
			{
				globalMessageError ?
					<MessageLite text={globalMessageError} /> :
				globalLoader ?
					<Loader /> :
					children
			}
		</React.Fragment>
	);
});

export { GlobalEditorSettings };
