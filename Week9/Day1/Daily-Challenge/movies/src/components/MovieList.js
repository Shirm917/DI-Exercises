import { connect } from "react-redux";
import { selectMovie } from "../actions";

const MovieList = (props) => {
    return (
        <div>
            <h2>Movie List</h2>
            {
                props.movies.map(element => {
                    return (
                        <div key={element.title}>
                            <p>{element.title}</p>
                            <button onClick={(elem) => props.selectMovie(element)}>Details</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
       movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectMovie: (elem) => dispatch(selectMovie(elem))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MovieList);

