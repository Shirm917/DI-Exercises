import React from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';

class MoviesContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="movieContainer">
                {
                    this.props.movies.length === 0 ? null
                    :
                    this.props.movies.Search.map(movie => {
                        return (
                            <MovieCard movie={movie}/>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}


export default connect(mapStateToProps)(MoviesContainer);