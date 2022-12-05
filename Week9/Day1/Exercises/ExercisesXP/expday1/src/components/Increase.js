import {connect} from 'react-redux'
import { INCREASE_COUNT } from '../actions';

const Increase = (props) => {
    return (
        <button onClick={props.increaseCount}>+</button>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCount: () => dispatch(INCREASE_COUNT())
    }
}

export default connect(null,mapDispatchToProps)(Increase);