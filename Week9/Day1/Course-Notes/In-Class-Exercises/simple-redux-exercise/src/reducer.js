let initState = {
    property_one: "one one one",
    property_two: "two"
}

export const reducer = (state=initState,action={}) => {
    // access to action.type and action.payload
    switch (action.type) {
        case "PROP_ONE":
            return {...state, property_one: action.payload};
        case "PROP_TWO":
            return {...state, property_two: state.property_one};
        default:
            return {...state}
    }
}