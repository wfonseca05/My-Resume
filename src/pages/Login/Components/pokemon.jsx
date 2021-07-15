import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { obtenerPokemonesAccion } from '../../../redux/pokeDucks';

function Pokemones() {
    const dispatch = useDispatch();
    const pokemones = useSelector(store => store.pokemones.array)

    return (
        <div>
            Lista de Pokemones
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>Obtener Pokemones</button>
            <ul>
                {
                    pokemones.map(item =>(
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>  
        </div>
    )
    
}

export default Pokemones