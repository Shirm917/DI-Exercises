import { SEARCH_MOVIE,FETCH_MOVIES,FETCH_MOVIE } from "../constants";

export const searchMovie = (text) => {
    return {
        type: SEARCH_MOVIE,
        payload: text
    }
}

export const fetchMovies = (text) => (dispatch) => {
    fetch(`http://www.omdbapi.com/?apikey=836f0a94&s=${text}`)
    .then(result => result.json())
    .then(data => {
        dispatch({
            type: FETCH_MOVIES,
            payload: data
        })
    })
    .catch()
}

export const fetchMovie = (id) => (dispatch) => {
    fetch(`https://www.omdbapi.com/?apikey=836f0a94&i=${id}`)
    .then(result => result.json())
    .then(data => {
        dispatch({
            type: FETCH_MOVIE,
            payload: data
        })
    })
    .catch()

}

