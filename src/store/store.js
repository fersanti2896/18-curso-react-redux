import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { todosAPI } from './apis';
import { counterSlice, pokemonSlice } from './slice';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,

        [todosAPI.reducerPath]: todosAPI.reducer,
    },
    /* Middleware */
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( todosAPI.middleware )
})