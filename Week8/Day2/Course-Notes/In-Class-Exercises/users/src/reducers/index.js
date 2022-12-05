const initState = {
    searchField: ""
}

export const reducer = (state=initState,action={}) => {
    switch (action.type) {
        case "SEARCHFIELD":
            return {...state, searchField: action.payload}
        default:
           return {...state}
    }
}