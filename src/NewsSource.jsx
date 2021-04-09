import React from 'react';

const NewsSource = (props) => {
    return(
        <h3 id='news-source' className='font'>By : <span> {props.source}</span></h3>
    );
}


export default NewsSource;