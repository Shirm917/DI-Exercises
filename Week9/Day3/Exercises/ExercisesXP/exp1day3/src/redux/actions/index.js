import { INCREMENT, DECREMENT } from "../constants"

export const increaseCounter = () => {
    return {
        type: INCREMENT
    }
}

export const decreaseCounter = () => {
    return {
        type: DECREMENT
    }
}

