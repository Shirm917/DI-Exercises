import { useState } from "react";
import { connect } from "react-redux";
import { searchBooks } from "../redux/actions";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SortButton from "./SortButton";

const Search = (props) => {
  const {searchBooks} = props;
  const [text,setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text) {
      searchBooks(text);
    }
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <TextField 
          id="outlined-basic" 
          label="Search Books" 
          variant="outlined" 
          InputProps={{
            endAdornment: <Button type="submit" variant="text">Search</Button>
          }}
          onChange={(event) => setText(event.target.value)}
        />
      </form>
      <SortButton/>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchBooks: (text) => dispatch(searchBooks(text))
  };
};

export default connect(null,mapDispatchToProps)(Search);
