import { takeEvery, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions/pokemons";
import * as api from "../api/pokemons";

function* getPokemons() {
  try {
    const result = yield call(api.getPokemons);

    yield put(actions.getPokemonsSuccess(result.data.results));

  } catch (error) {
    yield put(actions.getPokemonsFailed(error.message))
 
  }
}

function* watchGetPokemonsRequest() {
  yield takeEvery(actions.Types.GET_POKEMONS_REQUEST, getPokemons);
}

const pokemonsSagas = [fork(watchGetPokemonsRequest)];

export default pokemonsSagas;
