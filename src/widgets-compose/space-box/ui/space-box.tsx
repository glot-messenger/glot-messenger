import React, { useContext } from 'react';
import './space-box-style.css';
import { EditorContext } from '../../../entities';
import { Column } from './column';

const SpaceBox: React.FC = () => {
	const { columns, slots } = useContext(EditorContext);

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
