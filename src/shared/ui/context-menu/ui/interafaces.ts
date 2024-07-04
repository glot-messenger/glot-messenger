import type { IElementContextMenu } from '../../../types';

export interface IContextMenuProps {
   data: Array<IElementContextMenu>;
   renderElementFN: (dataElement: IElementContextMenu) => React.ReactNode;
	 title: string;
	 subTitle: string;
	 icon: {
		name: string;
		alt: string;
	 };
};
