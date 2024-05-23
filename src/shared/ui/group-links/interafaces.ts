export interface IElement {
   text: string;
   pathConfig: {
      text: string;
      path: string;
      titleHover: string;
   };
};

export interface IGroupLinksProps {
   linksGroup: {
      title?: string;
      data: Array<IElement>;
   };
};
