import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { fetchMovie } from "../redux/actions";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center"
}));

const Movie = (props) => {
  const { movie, fetchMovie } = props;
  const { id } = useParams();

  useEffect(() => {
    fetchMovie(id);
  }, []);

  return (
    <Box sx={{ width: '100%'}}>
      <Stack>
        <Item>
          <p>Genre: {movie.Genre}</p>
          <p>Released: {movie.Released}</p>
          <p>Rated: {movie.Rated}</p>
          <p>IMDB Rating: {movie.imdbRating}</p>
          <p>Director: {movie.Director}</p>
          <p>Writer: {movie.Writer}</p>
          <p>Actors: {movie.Actors}</p>
          <h3>About</h3>
          <p>{movie.Plot}</p>
          <button>
            <a className="link" href={`https://www.imdb.com/title/${movie.imdbID}/`}>
              View on IMDB
            </a>
          </button>
          <Link to="/" className="btn btn-default text-light link">
            {" "}
            Go Back To Search
          </Link>
        </Item>
      </Stack>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (id) => dispatch(fetchMovie(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
