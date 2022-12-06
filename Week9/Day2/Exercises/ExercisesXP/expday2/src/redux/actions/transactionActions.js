import {INSERT,UPDATE,DELETE,UPDATE_INDEX} from "./constants.js";

export const insert = (data) => {
    return {
        type: INSERT,
        payload: data
    }
}

export const update = (data) => {
    return {
        type: UPDATE,
        payload: data
    }
}

export const deleteId = (id) => {
    return {
        type: DELETE,
        payload: id
    }
}

export const updateIndex = (index) => {
    return {
        type: UPDATE_INDEX,
        payload: index
    }
}
