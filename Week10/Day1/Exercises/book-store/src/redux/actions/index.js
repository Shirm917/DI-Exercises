import { SEARCH_BOOKS, GET_BOOKS, SORT_BOOKS } from "../constants";

export const searchBooks = (text) => {
  return {
    type: SEARCH_BOOKS,
    payload: text
  };
};

export const getBooks = (text) => (dispatch) => {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
    .then((result) => result.json())
    .then((data) => {
      dispatch({
        type: GET_BOOKS,
        payload: data.items
      });
    })
    .catch(err => console.log(err));
};

export const sortBooks = (text) => {
    return {
      type: SORT_BOOKS,
      payload: text
    };
};