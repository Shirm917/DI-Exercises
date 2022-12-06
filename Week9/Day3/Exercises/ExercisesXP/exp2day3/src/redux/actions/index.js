import {AGE_UP,AGE_DOWN} from '../constants'

export const increaseAge = () => {
    return {
        type: AGE_UP
    }
}

export const decreaseAge = () => {
    return {
        type: AGE_DOWN
    }
}