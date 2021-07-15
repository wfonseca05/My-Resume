import React from  'react';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return(
        <div className='container'>
            <header className='d-flex justify-content-center'>
                <img src="img/logo.png" alt="" className='logo'/>
                <h1 className='mt-4'>Bienvenido a My Resume</h1>
            </header>
        </div>
    )
    
}

export default Header;