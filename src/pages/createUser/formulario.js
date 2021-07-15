import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Label from '../Login/Components/label/label';


function Formulario() {
    return(
        <div className='container'>
            <div className='d-flex flex-column align-items-center'>
                <h1>Registrese Aqui</h1>
                <Label text='Nombre completo'/>
                <input/>
                <Label text='Usuario'/>
                <input/>
                <Label text='Contraseña'/>
                <input/>
                <Label text='Correo electronico'/>
                <input/>
            </div>
        </div>
    )
}

export default Formulario;