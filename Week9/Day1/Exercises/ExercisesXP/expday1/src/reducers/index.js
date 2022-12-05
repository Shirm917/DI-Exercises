import {INCREASE, DECREASE} from "../actions"

let initState = {
    count: 0
}

export const reducer = (state=initState,action) => {
    switch (action.type) {
        case DECREASE:
            return {...state, count: state.count - 1}
        case INCREASE:
            return {...state, count: state.count + 1}
        default:
            return {...state}
    }
}