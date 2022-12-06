import {connect} from 'react-redux'
// import { searchText } from '../actions';
import { SEARCHTEXT } from '../redux/actions/searchText';

const Search = (props) => {
    const {handleSearch,dispatch} = props;
    return (
        <div>
            <input type="text" onChange={(event) => dispatch({type: SEARCHTEXT, payload: event.target.value})}/>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       handleSearch: (event) => dispatch(searchText(event.target.value))
//     }
// }

export default connect()(Search); 