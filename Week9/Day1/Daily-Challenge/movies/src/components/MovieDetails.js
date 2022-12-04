import { connect } from "react-redux";

const MovieDetails = ({ selectedMovie }) => {
    if (!selectedMovie) {
        return (
            <div className="details">
                <h2>Movie</h2>
                <p>Select Movie</p>
            </div>
        )
    } else {
        return (
            <div className="details">
                <h2>Movie</h2>
                <p>Title: {selectedMovie.title}</p><br/>
                <p>Release Date: {selectedMovie.releaseDate}</p><br/>
                <p>Rating: {selectedMovie.rating}</p>
            </div>
        )
    }
    }

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetails);