import React from 'react';

const NewsTime = (props) => {
    return(
        <p id='news-time' className='font'>Published At:<span> {props.time}</span></p>
    );
}


export default NewsTime;