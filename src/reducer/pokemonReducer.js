import { ADD_FAVORITE, SET_POKEMON } from "../actions/type";
const initialState = {
    list : [],
    favorites : []
}
export const pokemonReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMON:
            return {...state, list:action.payload};
        case ADD_FAVORITE:
            return {...state, favorites: [...state.favorites, action.payload]};
        default:
            return {...state};
    }
}