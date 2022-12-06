import { GET_ROBOTS } from "../actions";

const initState = {
    robots: []
}

export const reducer_robots = (state=initState,action={}) => {
    switch (action.type) {
        case GET_ROBOTS:
            return {...state, robots: action.payload}
        default:
            return {...state}
    }
}