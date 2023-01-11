import { useState,useEffect } from "react";
import { connect } from "react-redux";
import { getBooks } from "../redux/actions";
import BookCard from "./BookCard";

const BookList = (props) => {
    const {searchText,books,getBooks,sort} = props;
    const [sortedBooks,setSortedBooks] = useState([]);

    useEffect(() => {
        getBooks(searchText);
    },[searchText]);

    useEffect(() => {
        if (books) {
            setSortedBooks([...books].sort((a,b) => {
                if (sort === "oldest") {
                    return new Date(a.volumeInfo.publishedDate).getFullYear() - new Date(b.volumeInfo.publishedDate).getFullYear()
                } else if (sort === "newest") {
                    return new Date(b.volumeInfo.publishedDate).getFullYear() - new Date(a.volumeInfo.publishedDate).getFullYear()
                }
                return;
            })) 
        }
    },[sort,books])

    return (
        !books || books.length === 0 ? null
        : 
        <div className="books">
        {
            sortedBooks.map(element => {
                return (
                    <BookCard book={element}/>
                )
            }) 
        }
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        searchText: state.searchText,
        books: state.books,
        sort: state.sort
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: (text) => dispatch(getBooks(text))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(BookList);