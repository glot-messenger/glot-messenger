import React, { useState, useEffect } from 'react';
import type { IEditorProviderProps } from './interafaces';
import { EditorContext } from '../../../../entities';

import {
	factoryMultiton,
	factoryEditor,
	KEY_FOR_MULTITON_EDITOR,
	Loader
} from '../../../../shared';

const EditorProvider: React.FC<IEditorProviderProps> = ({ children }) => {
	const editor = factoryEditor();

	if (!factoryMultiton().get(KEY_FOR_MULTITON_EDITOR)) {
		factoryMultiton().set(KEY_FOR_MULTITON_EDITOR, editor);
	}

	const [isLoadingEditorSettings, setLoadingEditorSettings] = useState<boolean>(true);

	const [settingsEditor, setSettingsEditor] = useState<any>(null);

	const fetchSettingsEditor = async () => {
		
	};

	useEffect(() => {
		if (isLoadingEditorSettings) {
			fetchSettingsEditor();
		}
	}, [isLoadingEditorSettings]);

	return (
		<EditorContext.Provider value={null}>
			{isLoadingEditorSettings ? 
				<Loader /> :
				children
			}
		</EditorContext.Provider>
	);
};

export { EditorProvider };
