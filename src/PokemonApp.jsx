import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store';

export const PokemonApp = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getPokemons() )    
    }, [] )
    
    return (
        <>
            <h1>Test App</h1>
            <hr/>

            <ul>
                <li>Lista 1</li>
                <li>Lista 2</li>
                <li>Lista 2</li>
            </ul>
        </>
    )
}
