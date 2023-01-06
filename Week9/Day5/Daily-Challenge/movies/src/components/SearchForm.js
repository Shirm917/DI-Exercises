import React from 'react';
import {connect} from 'react-redux';
import { searchMovie,fetchMovies } from '../redux/actions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class SearchForm extends React.Component {
    constructor() {
        super();
    }

    getText = (event) => {
        this.props.searchMovie(event.target.value);
    }

    search = (event) => {
        event.preventDefault();
        if (this.props.text) {
            this.props.fetchMovies(this.props.text);
        }
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.search}>
                    <h1>Search for a Movie or TV series</h1>
                    <TextField id="outlined-basic" label="Search Movies,TV series..." variant="outlined" onChange={this.getText}/>
                    <Button type="submit" variant="text">Search</Button>
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