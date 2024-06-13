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

	const [settingsEditor, setSettingsEditor] = useState<any>({});

	const createDefaultSettingsEditor = async () => {
		const settingsDefaultEditor = editor.createDefaultSettings();

		console.log(settingsDefaultEditor);
		

		//settingsDefaultEditor.addDefaultColumn();

		// Тут надо записать эти настройки в базу асинхронно и снять лоадер
	};

	const fetchSettingsEditor = async () => {
		const settingsContainer = await editor.getSettings();

		const { isError, message, data } = settingsContainer;

		if (isError) {
			setErrorSettingsFetch(true);

			setMessageError(message + ' При получении настроек вашего мессенджера возникли проблемы...');

			setLoadingEditorSettings(false);

			return;
		}

		if (!isError) {
			setErrorSettingsFetch(false);

			setMessageError('');
		}

		if (data) {
			setSettingsEditor(data);

			setLoadingEditorSettings(false);

			return;
		}

		createDefaultSettingsEditor();
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
