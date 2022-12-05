export const searchRobots = (text) => {
    return {
        type: "SEARCHFIELD",
        payload: text
    }
}