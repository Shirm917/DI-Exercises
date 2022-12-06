export const GET_ROBOTS = "GET_ROBOTS";

export const getRobots = () => (dispatch,getState) => {
    // console.log(getState());
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(result => result.json())
    .then(data => {
        dispatch({
            type: GET_ROBOTS,
            payload: data
        })
    })
    .catch(err => console.log(err))
}
