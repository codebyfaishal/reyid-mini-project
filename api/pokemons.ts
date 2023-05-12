import axios from "axios";

export const apiGetPokemons = () => {
  return axios.get("https://api.thecatapi.com/v1/breeds/", {
    // params: {
    //   limit: 1000,
    // }
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
  // return axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedId}`);
  return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedId}&limit=8`);
};
