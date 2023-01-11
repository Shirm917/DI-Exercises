import { SEARCH_BOOKS, GET_BOOKS, SORT_BOOKS } from "../constants";

const initState = {
    searchText: "",
    books: [],
    sort: ""
}

export const reducer = (state=initState,action={}) => {
    switch (action.type) {
        case SEARCH_BOOKS:
            return {...state, searchText: action.payload};
        case GET_BOOKS:
            return {...state, books: action.payload};
        case SORT_BOOKS: 
            return {...state, sort: action.payload};
        default:
            return {...state};
    }
}

