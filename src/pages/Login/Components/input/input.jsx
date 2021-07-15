import React from 'react';
import './input.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = ({attribute, handdleChange, parametro}) => {
    return(
        <div className='input-container d-flex justify-content-center'>
            <input 
            id ={attribute.id}
            name= {attribute.name}
            type={attribute.type}
            placeholder= {attribute.placeholder}
            onChange={(e) => handdleChange(e.target.name, e.target.value)}
            className= {parametro ? 'input-error' : 'input-style'}
            />
        </div>
    )
}

export default Input;