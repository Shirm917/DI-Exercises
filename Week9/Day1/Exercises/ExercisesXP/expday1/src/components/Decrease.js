import {connect} from 'react-redux'
import { DECREASE_COUNT } from '../actions';

const Decrease = (props) => {
    return (
        <button onClick={props.decreaseCount}>-</button>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        decreaseCount: () => dispatch(DECREASE_COUNT()),
    }
}

export default connect(null,mapDispatchToProps)(Decrease);