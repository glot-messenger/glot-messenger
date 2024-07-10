import React, { useState, useEffect, useContext } from 'react';
import type { IEditorProviderProps } from './interafaces';

import {
	EditorContext,
	EventEmitterContext
} from '../../../../entities';

import {
	factoryMultiton,
	factoryEditor,
	factoryColumn,
	factorySlot,
	KEY_FOR_MULTITON_EDITOR,
	KEY_FOR_MULTITON_COLUMN,
	KEY_FOR_MULTITON_SLOT,
	Loader,
	MessageLite,
	BUTTON_LOCK_EVENT_CLICK,
	COLUMN_EVENT_SEGMENT,
	COLUMN_MODULE_EVENT_METHOD,
	SLOT_MODULE_EVENT_METHOD,
	ADD_COLUMN_EVENT_SEGMENT,
	MOVING_DOWN_SLOT_EVENT_SEGMENT
} from '../../../../shared';

const EditorProvider: React.FC<IEditorProviderProps> = ({ children }) => {
	const eventEmitter = useContext(EventEmitterContext);

	// <Модули и их подключение>
	const editor = factoryEditor();

	const column = factoryColumn();

	const slot = factorySlot();

	if (!factoryMultiton().get(KEY_FOR_MULTITON_EDITOR)) {
		factoryMultiton().set(KEY_FOR_MULTITON_EDITOR, editor);
	}

	if (!factoryMultiton().get(KEY_FOR_MULTITON_COLUMN)) {
		factoryMultiton().set(KEY_FOR_MULTITON_COLUMN, column);
	}

	if (!factoryMultiton().get(KEY_FOR_MULTITON_SLOT)) {
		factoryMultiton().set(KEY_FOR_MULTITON_SLOT, slot);
	}
	// </Модули и их подключение>

	// <Данные для отрисовки пространства>
	const [settingsEditor, setSettingsEditor] = useState<any>({});

	const [columnsEditor, setColumnsEditor] = useState<null | Array<any>>(null);

	const [slotsEditor, setSlotsEditor] = useState<null | Record<string, Array<any>>>(null);
	// </Данные для отрисовки пространства>

	// <Данные по загрузке настроек мессенджера>
	const [isLoadingEditorSettings, setLoadingEditorSettings] = useState<boolean>(true);

	const [isErrorSettingsFetch, setErrorSettingsFetch] = useState<boolean>(false);

	const [messageError, setMessageError] = useState<string>('');
	// </Данные по загрузке настроек мессенджера>

	const createDefaultSettingsEditor = async () => {
		const { isError, message, data } = await editor.createDefaultSettings();

		if (isError) {
			setErrorSettingsFetch(true);

			setMessageError(message + ' В процессе конструирования и создания вашего дефолтного вида для мессенджера возникла проблема...');

		} else {
			const { slots, columns, editor } = data;

			setSlotsEditor(slots);

			setColumnsEditor(columns);

			setSettingsEditor(editor);
		}

		setLoadingEditorSettings(false);
	};

	const fetchSettingsEditor = async () => {
		const settingsContainer = await editor.getSettingsWithColumnsAndSlots();

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

		const { slots, columns, editor: settingsEditorData } = data;

		if (settingsEditorData) {
			setSettingsEditor(settingsEditorData);

			setColumnsEditor(columns);

			setSlotsEditor(slots);

			setLoadingEditorSettings(false);

			return;
		}

		createDefaultSettingsEditor();
	};

	const updateColumnInStore = (data: any): void => {
		if (columnsEditor) {
			const newColumnsStore = columnsEditor.map((columnStore) => {
				if (columnStore._id === data._id) {
					return data;
				}

				return columnStore;
			});

			setColumnsEditor(newColumnsStore);
		}
	};

	useEffect(() => {
		if (isLoadingEditorSettings) {
			fetchSettingsEditor();

		} else {
			// ТУТ ПРОИСХОДИТ ПЕРЕХВАТ СОБЫТИЙ ИЗ ЛЮБЫХ МЕСТ ПРИЛОЖЕНИЯ: UI или классов LIB
			eventEmitter.on(BUTTON_LOCK_EVENT_CLICK + COLUMN_EVENT_SEGMENT, (payload) => {
				console.log(payload);

				column.updateColumnByIdEditorAndColumn(payload)
					.then(({ isError, data }) => {
						if (isError) {
							console.log('ВЫВОДИТЬ В ИНТЕРФЕЙС ОШИБКУ, ОБНОВЛЕНИЕ КОЛОНКИ НЕ ПРОИЗОШЛО. Придумать общий механизм обработки ошибок');

							return;
						}

						updateColumnInStore(data);
					});
			});

			eventEmitter.on(COLUMN_MODULE_EVENT_METHOD + ADD_COLUMN_EVENT_SEGMENT, ({ isError, message, data }) => {
				if (isError) {
					console.log('ВЫВОДИТЬ В ИНТЕРФЕЙС ОШИБКУ, добавление колонки не произошло. Придумать общий механизм обработки ошибок');

					return;
				}

				setColumnsEditor((prevState) => {
					if (prevState) {
						return [
							...prevState,
							data.columns[0]
						]
					}

					return [ data.columns[0] ];
				});

				setSettingsEditor((prevState: any) => {
					return {
						...prevState,
						columns: [
							...prevState.columns,
							data.columns[0]._id
						]
					}
				});

				setSlotsEditor((prevState: any) => {
					return {
						...prevState,
						[data.columns[0]._id]: []
					}
				});
			});

			// Отлавливаем событие перемещения колонки
			eventEmitter.on(SLOT_MODULE_EVENT_METHOD + MOVING_DOWN_SLOT_EVENT_SEGMENT, ({ isError, message, data }) => {
				console.log('Поймал на провайдере');
				if (isError) {
					console.log('ВЫВОДИТЬ В ИНТЕРФЕЙС ОШИБКУ, Перемещение не произошло. Придумать общий механизм обработки ошибок');

					return;
				}

				console.log('PAYLOAD', data); // ОТРАБОТАТЬ ДАННЫЕ
			});
		}
	}, [isLoadingEditorSettings]);

	return (
		<EditorContext.Provider value={{
			editor: settingsEditor,
			columns: columnsEditor,
			slots: slotsEditor,
			modules: {
				editor,
				column,
				slot
			}
		}}>
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
