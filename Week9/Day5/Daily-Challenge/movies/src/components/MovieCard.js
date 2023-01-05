import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MovieCard = (props) => {
    return (
        <Card sx={{ width: 345 }}>
            <CardMedia
                sx={{ height: 500 }}
                image={props.movie.Poster}
                title={`${props.movie.Title} poster`}
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                <h3 className="movieTitle">{props.movie.Title}</h3>
            </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/movie/${props.movie.imdbID}`}><Button size="small">See more details</Button></Link>
            </CardActions>
        </Card>
    )

}

export default MovieCard;