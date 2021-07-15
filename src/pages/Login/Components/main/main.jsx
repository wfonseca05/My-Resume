import React, {useState} from 'react';
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Label from '../label/label';
import Input from '../input/input'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Formulario from '../../../createUser/formulario';
import Pokemones from '../pokemon';
import { Provider } from 'react-redux';
import { generateStore } from '../../../../redux/store';

const conImpuesto = (Component) =>{
    return(config) => class extends React.Component{
      render(){
        return(
          <Component/>
        )
      }
    }
  }

function Main() {

    const [usuario, modificarUsuario] = useState('');
    const [contraseña, modificarContraseña] = useState('');
    const [contraseñaError, modificarContraseñaError] = useState(false)
    const [isLogin, modificarIsLogin] = useState(false)
    const [tieneError, modificarTieneError] = useState (false)

    function handdleChange(nombre, valor) {
        if (nombre === 'usuario') {
            modificarUsuario(valor);
            modificarTieneError(false);
        }else {
            if (valor.length < 6) {
                modificarContraseñaError(true);
                modificarTieneError(false);
            } else {
                modificarContraseñaError(false);
                modificarContraseña(valor);
                modificarTieneError(false)
            }
            
        }
    }

    function ifMatch(parametro) {
        if (parametro.usuario.length > 0 && parametro.contraseña.length > 0) {
            if (parametro.usuario === 'wfonseca' && parametro.contraseña === 'Fvandy05**') {
                const {usuario, contraseña} = parametro;
                let ac = {usuario, contraseña};
                let cuenta = JSON.stringify(ac);
                localStorage.setItem('cuenta', cuenta)
                modificarIsLogin(true)
            } else{
                modificarIsLogin(false)
                modificarTieneError(true)
            }
        } else {
            modificarIsLogin(false)
            modificarTieneError(true)
        }
        
    }

    function eventoEnvio() {
        let cuenta = {usuario, contraseña}
        if (cuenta) {
            ifMatch(cuenta)
        }
        
    }

    const store = generateStore();

    return(
        <div className='main-container'>
            {isLogin ? 
            <div className='container'>
                <div className='d-flex flex-column align-items-center'>
                    <h1>Hola {usuario}! </h1>
                    <p>FELICITACIONES ESTAS LOGEADO Preparate para lo mejor</p>
                </div>
                <Provider store={store}>
                    <Pokemones/>
                </Provider>
            </div>
                :
                <div className='login-content'>
                    <div className='container'>
                        <div className='row d-flex justify-content-center my-3 text-center'>
                            { tieneError &&
                                <label className='label-alert'>Su usuario y contraseña son incorrectos o no existen en nuestra plataforma</label>
                            }
                        </div>
                    </div>
                        <Router>
                            <Switch>
                                <Route path='/' exact>
                                    <Label text='Usuario'/>
                                    <Input
                                    attribute={{
                                        id: 'usuario',
                                        name: 'usuario',
                                        type:'text',
                                        placeholder: 'ingrese su usuario',

                                    }}
                                    handdleChange = {handdleChange}
                                    />
                                    <Label text='Contraseña'/>
                                    <Input            
                                        attribute={{
                                        id: 'contraseña',
                                        name: 'contraseña',
                                        type:'password',
                                        placeholder: 'ingrese su contraseña',
                                        
                                    }}
                                    handdleChange = {handdleChange}
                                    parametro={contraseñaError}
                                    />
                                    <div className='container'>
                                        <div className='row d-flex justify-content-center mt-3'>
                                            { contraseñaError &&
                                                <label className='labelError'>
                                                    Contraseña invalida o incompleta
                                                </label>
                                            }
                                        </div>
                                    </div>
                                    <div className='container'>
                                        <div className='row d-flex justify-content-center mt-3'>
                                            <button className='btn btn-dark px-5' onClick={eventoEnvio}>Iniciar Sesion</button>
                                        </div>
                                    </div>
                                    <div className='container'>
                                        <div className='row d-flex justify-content-center mt-3'>
                                            <Link to='/Registro'>
                                                Registrese Aqui
                                            </Link>
                                        </div>
                                    </div>
                                </Route>
                                <Route path='/Registro'>
                                    <Formulario/>
                                </Route>
                            </Switch>

                        </Router>
                </div>
            }
        </div>
    )
}

export default Main;