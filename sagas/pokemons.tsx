import { takeEvery, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions/pokemons";
import * as api from "../api/pokemons";

function* getPokemons() {
  try {
    const result = yield call(api.apiGetPokemons);
    console.log("LIST", result)

    yield put(actions.getPokemonsSuccess(result.data.results));

  } catch (error) {
    yield put(actions.getPokemonsFailed(error.message))
 
  }
}



// export function* getPokemonsDetails(action) {
//   try {
//     const result = yield call(api.apiGetPokemonsDetails, action.selectedId);
//     console.log("getPokemonsDetails", result);

//     yield put(actions.getPokemonsDetailsSuccess(result));
//   } catch (error) {
//     console.log(error);
//     yield put(actions.getPokemonsDetailsFailed(error.message));
//   }
// }

export function* getPokemonsDetails(action) {
  console.log("AACTION", action);
  try {
    const result = yield call(api.apiGetPokemonsDetails, action.selectedId);
    console.log("action select id", action);
    console.log("getPokemonsDetails", result.data);

    yield put(actions.getPokemonsDetailsSuccess(result.data));
  } catch (error) {
    console.log(error);
    yield put(actions.getPokemonsDetailsFailed(error.message));
  }
}

function* watchGetPokemonsRequest() {
  yield takeEvery(actions.Types.GET_POKEMONS_REQUEST, getPokemons);
  yield takeEvery(actions.Types.GET_POKEMONS_DETAILS_REQUEST, getPokemonsDetails);
}

const pokemonsSagas = [fork(watchGetPokemonsRequest)];

export default pokemonsSagas;
