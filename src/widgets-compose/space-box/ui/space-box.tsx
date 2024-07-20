import React from 'react';
import { observer } from 'mobx-react-lite';
import './space-box-style.css';
import { $columnsEditorStore } from '../../../entities';
import { Column } from './column';

const SpaceBox: React.FC = observer(() => {
	const { data } = $columnsEditorStore;

	const columns = data['columnsEditor'];

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
});

export { SpaceBox };
