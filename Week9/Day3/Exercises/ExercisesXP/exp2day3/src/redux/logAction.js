export const logAction = (store) => (next) => (action) => {
    next(action);
    console.log("content",JSON.stringify(store.getState()));
}