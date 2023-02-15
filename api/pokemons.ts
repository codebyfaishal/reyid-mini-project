import axios from "axios";

export const apiGetPokemons = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon", {
    params: {
      limit: 1000,
    }
  });
};

// export const apiGetPokemonsDetails = () => {
//   console.log("apiGetPokemonsDetails", apiGetPokemonsDetails)
//   return axios.get("https://pokeapi.co/api/v2/pokemon/${selectedId}", {
//     // params: {
//     //   limit: 1000,
//     // }
//   });
// };

// export const apiGetPokemonsDetails = (selectedId) => {
//   console.log("apiGetPokemonsDetails", selectedId)
//   return axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedId}`, {
//     // params: {
//     //   limit: 1000,
//     // }
//   });
// };

export const apiGetPokemonsDetails = (selectedId) => {
  console.log("apiGetPokemonsDetails", selectedId)
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedId}`);
};
