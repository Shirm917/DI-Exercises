import {connect} from "react-redux";
import {searchRobots} from "../actions/"

const Search = (props) => {
    // const {handleChange, searchRobots} = props;
    return (
        <>
            <input type="text" onChange={(event) => props.searchRobots(event.target.value)}/>
            <button>Search</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      searchRobots: (text) => dispatch(searchRobots(text))
    }
}
  
  export default connect(null,mapDispatchToProps)(Search);