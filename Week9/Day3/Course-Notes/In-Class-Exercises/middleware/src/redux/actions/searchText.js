export const SEARCHTEXT = "SEARCHTEXT";

export const searchText = (text) => {
    return {
        type: SEARCHTEXT,
        payload: text
    }
}