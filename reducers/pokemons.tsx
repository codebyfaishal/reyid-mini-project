import { Types } from '../actions/pokemons';

const initialState = {
  items: [],
  loading: false,

};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_POKEMONS_REQUEST:
      return {
        ...state,
        loading: true,
        error:''
      };
    case Types.GET_POKEMONS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        loading: false
      };
    default:
      return state;
  }
};
