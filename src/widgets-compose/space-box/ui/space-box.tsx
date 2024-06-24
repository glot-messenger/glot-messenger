import React, { useContext } from 'react';
import './space-box-style.css';
import { EditorContext } from '../../../entities';
import { Column } from './column';

const SpaceBox: React.FC = () => {
	const { columns, editor, slots } = useContext(EditorContext);
	// проверять, есть или нету данных по колонкам и либо сразу рисовать, либо запрашивать

	console.log('EDITOR', editor);

	console.log('COLUMNS', columns);

	console.log('SLOTS', slots);

	return (
		<div className='space-box'>
			<div className='space-box__container'>
				{columns.map((columnData: any) => {

					return (
						<Column key={columnData._id} data={columnData} />
					);
				})}
			</div>
		</div>
	);
};

export { SpaceBox };
