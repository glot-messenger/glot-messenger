import React, { useContext } from 'react';
import './space-box-style.css';
import { EditorContext } from '../../../entities';
import { Column } from './column';

const SpaceBox: React.FC = () => {
	const { columns } = useContext(EditorContext);
	// проверять, есть или нету данных по колонкам и либо сразу рисовать, либо запрашивать
	return (
		<div className='space-box'>
			<div className='space-box__container'>
				{/*{editor.columns.map((idColumn: string) => {
					return (
						<Column key={idColumn} idColumn={idColumn} />
					);
				})}*/}
			</div>
		</div>
	);
};

export { SpaceBox };
