import { combineReducers } from "redux";
import { SEARCHTEXT } from "../actions/searchText";
import { reducer_robots } from "./reducer_robots";

const initState = {
    text: ""
}

export const reducer_search = (state=initState,action={}) => {
    switch (action.type) {
        case SEARCHTEXT:
            return {...state, text: action.payload}
        default:
            return {...state}
    }
}

const rootReducer = combineReducers({
    reducer_search,
    reducer_robots
})

export default rootReducer;