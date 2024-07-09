import React from 'react';
import './features-block-style.css';
import { configFeaturesBlock } from '../config';

const FeaturesBlock: React.FC = () => {
   return (
      <div className='features-block'>
         <div className='features-block__column'>
            <p className='features-block__text'>{configFeaturesBlock.title}</p>
         </div>
         <div className='features-block__column'>
            <ul className='features-block__list'>
               {configFeaturesBlock.data.map(({ _id, text, classes }) => {
                  return (
                     <li className={`features-block__element-feature ${classes}`} key={_id}>{text}</li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

export { FeaturesBlock };
