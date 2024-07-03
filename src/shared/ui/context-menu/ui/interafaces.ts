import type {
   IElementContextMenu,
   IConfigContextMenuColumn
} from '../../../types';

export interface IContextMenuProps {
   data: IConfigContextMenuColumn;
   renderElementFN: (dataElement: IElementContextMenu) => React.ReactNode;
};
