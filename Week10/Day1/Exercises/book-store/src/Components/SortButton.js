import { connect } from "react-redux";
import { sortBooks } from "../redux/actions";

const SortButton = (props) => {
  const {sort,sortBooks} = props;  

  const handleChange = (event) => {
    sortBooks(event.target.value);
  };

  return (
    <div>
        <select className="sort" name="sort" value={sort} onChange={handleChange}>
            <option value="" disabled selected>Sort</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
        </select>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortBooks: (text) => dispatch(sortBooks(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SortButton);
