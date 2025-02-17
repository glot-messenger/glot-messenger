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

	const { // STORE настроек редактора, самый высокоуровневый объект
		isLoading: isLoadingSettingsEditor,
		isError: isErrorSettingsEditor,
		messageError: messageSettingsEditor,
		getSettingsEditorAction,
		data: dataSettingsEditor
	} = $settingsEditorStore;

	const { // STORE колонок редактора, которые отрисовываются на рабочем пространстве мессенджера
		isLoading: isLoadingColumnsEditor,
		isError: isErrorColumnsEditor,
		messageError: messageColumnsEditor,
		getColumnsEditorAction,
		data: dataColumnsEditor
	} = $columnsEditorStore;

	const { // STORE слотов редактора, слоты отрисовываются внутри колонок
		isLoading: isLoadingSlotsEditor,
		isError: isErrorSlotsEditor,
		messageError: messageSlotsEditor,
		getSlotsEditorAction
	} = $slotsEditorStore;

	useEffect(() => {
		// Первым делом отлавливаем любые ошибки, если они есть, то нет смысла что-то продолжать делать
		if (isErrorSettingsEditor) {
			setGlobalMessageError(messageSettingsEditor);
			setGlobalLoader(false);

		} else if (isErrorColumnsEditor) {
			setGlobalMessageError(messageColumnsEditor);
			setGlobalLoader(false);

		} else if (isErrorSlotsEditor) {
			setGlobalMessageError(messageSlotsEditor);
			setGlobalLoader(false);

		} else if (isLoadingSettingsEditor) { // Если настройки редактора еще не запрашивались, то делаем запрос
			getSettingsEditorAction({ userId: '66a2a64c4d6b1a09ff83bd74' }); // Пользователь, который есть в базе
			setGlobalMessageError('');

		} else if (!isLoadingSettingsEditor && isLoadingColumnsEditor) { // Если настройки уже были получены, а информация по колонкам не была запрошена, то делаем запрос
			getColumnsEditorAction({ settingId: dataSettingsEditor?.settingsEditor?._id, columns: dataSettingsEditor?.settingsEditor?.columns });
			setGlobalMessageError('');

		} else if (!isLoadingSettingsEditor && !isLoadingColumnsEditor && isLoadingSlotsEditor) { // Если настройки были получены, колонки были получены, а информация по слотам все еще не была запрошена
			const packColumnsWithSlots = {};

			dataColumnsEditor.columnsEditor.forEach((column) => {
				packColumnsWithSlots[column._id] = column.slots;
			});

			getSlotsEditorAction({ columnsIdsWithSlotsPack: packColumnsWithSlots });
			setGlobalMessageError('');

		} else if (!isLoadingSettingsEditor && !isLoadingColumnsEditor && !isLoadingSlotsEditor) { // Если все данные получены, то можно отключать лоадер
			setGlobalLoader(false);
			setGlobalMessageError('');

		} else { // Что-то пошло не так, тогда выводится эта ошибка
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
		isLoadingSlotsEditor,
		dataColumnsEditor
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
