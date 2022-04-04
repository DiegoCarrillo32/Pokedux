import { ADD_FAVORITE, SET_POKEMON } from "./type";

export const setPokemon = (payload) => ({
  type:SET_POKEMON,
  payload
});

export const addFavoritePokemon = (payload) => ({
  type:ADD_FAVORITE,
  payload
})
