import React, { useState, useEffect } from 'react';
import type { IEditorProviderProps } from './interafaces';
import { EditorContext } from '../../../../entities';

import {
	factoryMultiton,
	factoryEditor,
	KEY_FOR_MULTITON_EDITOR,
	Loader,
	MessageLite
} from '../../../../shared';

const EditorProvider: React.FC<IEditorProviderProps> = ({ children }) => {
	const editor = factoryEditor();

	if (!factoryMultiton().get(KEY_FOR_MULTITON_EDITOR)) {
		factoryMultiton().set(KEY_FOR_MULTITON_EDITOR, editor);
	}

	const [isLoadingEditorSettings, setLoadingEditorSettings] = useState<boolean>(true);

	const [isErrorSettingsFetch, setErrorSettingsFetch] = useState<boolean>(false);

	const [messageError, setMessageError] = useState<string>('');

	const fetchSettingsEditor = async () => {
		const settingsContainer = await editor.getSettings();

		const { isError, message } = settingsContainer;

		if (isError) {
			setErrorSettingsFetch(true);

			setMessageError(message + ' При получении настроек вашего мессенджера возникли проблемы...');

		} else {
			setErrorSettingsFetch(false);

			setMessageError('');
		}

		setLoadingEditorSettings(false);
	};

	useEffect(() => {
		if (isLoadingEditorSettings) {
			fetchSettingsEditor();
		}
	}, [isLoadingEditorSettings]);

	return (
		<EditorContext.Provider value={editor}>
			{
				isLoadingEditorSettings ? 
					<Loader /> :
					isErrorSettingsFetch ?
						<MessageLite text={messageError} /> :
							children
			}
		</EditorContext.Provider>
	);
};

export { EditorProvider };
