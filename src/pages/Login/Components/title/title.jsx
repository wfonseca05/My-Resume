import React from 'react';
import './title.css'

const Title = ({text}) => {
    return(
    <div className='title-container col-sm-12'>
        <label className='title-label'>{text}</label>
    </div>
    )
};

export default Title