import {Link} from 'react-router-dom';

const MovieCard = (props) => {
    console.log(props);
    console.log(props.movie.imdbID);
    return (
        <div>
            <img src={props.movie.Poster} alt={`${props.movie.Title} poster`}/>
            <h3>{props.movie.Title}</h3>
            <Link to={`/movie/${props.movie.imdbID}`}><button>See more details</button></Link>
        </div>
    )

}

export default MovieCard;