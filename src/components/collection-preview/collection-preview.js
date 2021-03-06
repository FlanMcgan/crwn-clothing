import React from 'react';
import CollecetionItem from '../collection-item/collection-item.jsx'

import './collection-preview.scss';

const CollectionPreview = ({title, items}) =>(
    <div className = 'collection-preview'>
        <h1 className = 'title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {
            items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherItemProps }) =>(
                <CollecetionItem key={id} {...otherItemProps}/>
            ))
        }
        </div>
    </div>
);

export default CollectionPreview;