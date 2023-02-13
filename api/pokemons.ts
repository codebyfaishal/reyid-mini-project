import axios from "axios";

export const apiGetPokemons = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon", {
    params: {
      limit: 1000,
    }
  });
};
