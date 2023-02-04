export const Types = {
    GET_POKEMONS_REQUEST: 'GET_POKEMONS_REQUEST',
    GET_POKEMONS_SUCCESS: 'GET_POKEMONS_SUCCESS'
  };
  
  export const getPokemonsRequest = () => ({
    type: Types.GET_POKEMONS_REQUEST
  });
  
  export const getPokemonsSuccess = items => ({
    type: Types.GET_POKEMONS_SUCCESS,
    payload: { items }
  });
  