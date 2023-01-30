import React from 'react';


export default function PicItem(props) {

    const {title, content} = props.item;
    return (
        <div className='display-imgs-wrap'>
            <div className='title'>{title}</div>
            <div className="content">
                <img src={content} alt={title} />
            </div>
        </div>
    )
        
}



