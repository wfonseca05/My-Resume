import React from 'react';
import './login.css'
import Header from './Components/hearder/header';
import Main from './Components/main/main';
import Footer from './Components/footer/footer';

function Login() {
    return(
        <div className='login-container'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
    
}

export default Login;