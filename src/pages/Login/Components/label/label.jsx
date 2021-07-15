import React from 'react';
import './label.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Label = ({text}) => {
    return(
        <div className='d-flex justify-content-center labels-info'>
            <label> {text} </label>
        </div>
    )
}

export default Label;