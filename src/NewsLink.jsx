import React from 'react';

const NewsLink = (props) => {
        return(
            <a id="news-link" href={props.link} className='font' target="__blank">Read More</a>
        );
}


export default NewsLink;