export const Types = {
    GET_POKEMONS_REQUEST: 'GET_POKEMONS_REQUEST',
    GET_POKEMONS_SUCCESS: 'GET_POKEMONS_SUCCESS',
    GET_POKEMONS_FAILED: 'GET_POKEMONS_FAILED',
  };
  
  export const getPokemonsRequest = () => ({
    type: Types.GET_POKEMONS_REQUEST
  });
  
  export const getPokemonsSuccess = items => ({
    type: Types.GET_POKEMONS_SUCCESS,
    payload: { items }
  });

  export const getPokemonsFailed = items => ({
    type: Types.GET_POKEMONS_FAILED,
    
  });
  