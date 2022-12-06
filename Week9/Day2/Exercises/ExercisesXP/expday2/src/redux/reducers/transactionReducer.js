import {INSERT,UPDATE,DELETE,UPDATE_INDEX} from "../actions/constants"

const initState = {
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem("transactions"))
}

export const transactionReducer = (state=initState,action={}) => {
    const {currentIndex,list} = state;
    switch (action.type) {
        case INSERT:
            list.push(action.payload)
            localStorage.setItem("transactions", JSON.stringify(list))
            return {...state, list: [...list], currentIndex: -1}
        case UPDATE:
            list[currentIndex] = action.payload;
            localStorage.setItem("transactions", JSON.stringify(list))
            return {...state, list: [...list], currentIndex: -1}
        case UPDATE_INDEX:
            return {...state, currentIndex: action.payload}  
        case DELETE:
            list.splice(action.payload, 1)
            localStorage.setItem("transactions", JSON.stringify(list))
            return {...state, list: [...list], currentIndex: -1}        
        default:
            return {...state}
    }
}