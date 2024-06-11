import React, { useContext } from 'react';
import './space-page-style.css';
import { EditorContext } from '../../../entities';

const SpacePage: React.FC = () => {
	const editorSettings = useContext(EditorContext);

	console.log(editorSettings.storeColumns);

	return (
		<div className='space'>
			<div className='space__container'>
				
			</div>
		</div>
	);
};

export { SpacePage };
