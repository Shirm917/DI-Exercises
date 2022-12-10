import React from 'react';
import {connect} from 'react-redux';
import { searchMovie,fetchMovies } from '../redux/actions';

class SearchForm extends React.Component {
    constructor() {
        super();
    }

    getText = (event) => {
        this.props.searchMovie(event.target.value);
    }

    search = (event) => {
        event.preventDefault();
        this.props.fetchMovies(this.props.text);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.search}>
                    <h1>Search for a movie or TV series</h1>
                    <input type="text" onChange={this.getText} placeholder="Search movies,TV series..."/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchMovie: (text) => dispatch(searchMovie(text)),
        fetchMovies: (text) => dispatch(fetchMovies(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchForm);