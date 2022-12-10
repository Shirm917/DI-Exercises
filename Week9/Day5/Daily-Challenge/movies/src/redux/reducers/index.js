import { SEARCH_MOVIE,FETCH_MOVIES,FETCH_MOVIE } from "../constants";

const initState = {
  text: "",
  movies: [],
  movie: []
}

export const reducer = (state=initState,action={}) => {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {...state, text: action.payload}
        case FETCH_MOVIES:
            return {...state, movies: action.payload}
        case FETCH_MOVIE:
            return {...state, movie: action.payload}
        default:
            return {...state};
    }
}