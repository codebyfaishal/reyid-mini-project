import axios from "axios";

export const getPokemons = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon", {
    // params: {
    //   total: 1000,
    //   per_page: 12
    // }
  });
};
