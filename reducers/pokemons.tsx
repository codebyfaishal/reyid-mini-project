import { Types } from '../actions/pokemons';

const initialState = {
  items: []
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_POKEMONS_SUCCESS:
      return {
        ...state,
        items: action.payload.items
      };
    default:
      return state;
  }
};
