import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const BookCard = (props) => {
  const { book } = props;

  return (
    <Card key={book.id} sx={{ width: 345, margin: 5}}>
      <CardMedia
        sx={{ height: 500 }}
        image={book.volumeInfo.hasOwnProperty("imageLinks") ? book.volumeInfo.imageLinks.smallThumbnail : null}
        title={book.volumeInfo.hasOwnProperty("title") ? `${book.volumeInfo.title} Book Cover` : "Book Cover"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.volumeInfo.hasOwnProperty("title") ? book.volumeInfo.title : "Not Found"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Author: {book.volumeInfo.hasOwnProperty("authors") ? book.volumeInfo.authors[0] : "Not Found"}
          <br />
          Published: {book.volumeInfo.hasOwnProperty("publishedDate") ? new Date(book.volumeInfo.publishedDate).getFullYear() : "Not Found"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
