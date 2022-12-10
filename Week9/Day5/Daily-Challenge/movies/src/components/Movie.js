import {connect} from 'react-redux';
import {Link,useParams} from 'react-router-dom';
import React, { useEffect } from 'react';
import { fetchMovie } from '../redux/actions';

const Movie = (props) => {
    const {movie,fetchMovie} = props;
    const {id} = useParams();
    
    useEffect(() => {
        fetchMovie(id);
    }, [])
    console.log(movie.Ratings);
    return (
        <div>
            <div>
                <p>Genre: {movie.Genre}</p>
                <p>Released: {movie.Released}</p>
                <p>Rated: {movie.Rated}</p>
                <p>IMDB Rating: {movie.imdbRating}</p>
                <p>Director: {movie.Director}</p>
                <p>Writer: {movie.Writer}</p>
                <p>Actors: {movie.Actors}</p>
            </div>
            <div>
                <h3>About</h3>
                <p>{movie.Plot}</p>
                <button><a href={`https://www.imdb.com/title/${movie.imdbID}/`}>View on IMDB</a></button>
                <Link to="/" className="btn btn-default text-light"> Go Back To Search </Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (id) => dispatch(fetchMovie(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);