export const Types = {
    GET_POKEMONS_REQUEST: 'GET_POKEMONS_REQUEST',
    GET_POKEMONS_SUCCESS: 'GET_POKEMONS_SUCCESS',
    GET_POKEMONS_FAILED: 'GET_POKEMONS_FAILED',
    GET_POKEMONS_DETAILS_REQUEST: 'GET_POKEMONS_DETAILS_REQUEST',
    GET_POKEMONS_DETAILS_SUCCESS: 'GET_POKEMONS_DETAILS_SUCCESS',
    GET_POKEMONS_DETAILS_FAILED: 'GET_POKEMONS_DETAILS_FAILED',
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

  export const getPokemonsDetailsRequest = (selectedId) => ({
    type: Types.GET_POKEMONS_DETAILS_REQUEST,
    selectedId
  });
  
  export const getPokemonsDetailsSuccess = itemsDetail => ({
    type: Types.GET_POKEMONS_DETAILS_SUCCESS,
    payload: { itemsDetail }
  });

  export const getPokemonsDetailsFailed = itemsDetail => ({
    type: Types.GET_POKEMONS_DETAILS_FAILED,
    
  });
  