import axios from 'axios';
import { action } from 'commander';

// Constantes

const datosInicio = {
    array : []
};

//types
const obtenerPokemonesExito = 'obtenerPokemonesExito';


// .reducer
export default function pokesReducer(state = datosInicio, action){
    switch(action.type){
        case obtenerPokemonesExito:
            return {...state, array: action.payload}
        default:
            return state
    }
}

// Acciones
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        dispatch({
            type: obtenerPokemonesExito,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}