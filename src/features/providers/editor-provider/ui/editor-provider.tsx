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

	const [columnsEditor, setColumnsEditor] = useState<any>([]);

	const [slotsEditor, setSlotsEditor] = useState<any>([]);

	const createDefaultSettingsEditor = async () => {
		const { isError, message, data } = await editor.createDefaultSettings();

		console.log('data editor provider', data); // ПОДУМАТЬ НАД ТЕМ, что при дефолтной генерации все есть на клиенте, а если из бд берется, то по частям уже

		if (isError) {
			setErrorSettingsFetch(true);

			setMessageError(message + ' В процессе конструирования и создания вашего дефолтного вида для мессенджера возникла проблема...');

		} else {
			setSettingsEditor(data);
		}

		setLoadingEditorSettings(false);
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
		<EditorContext.Provider value={settingsEditor}>
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
