import React from 'react';

const NewsTitle = (props) => {
        return(
            <h2 id="news-title" className='font'>{props.title}</h2>
        );
}

export default NewsTitle;