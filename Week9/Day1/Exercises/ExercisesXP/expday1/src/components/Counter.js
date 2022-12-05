import {connect} from 'react-redux'
import { DECREASE_COUNT, INCREASE_COUNT } from '../actions';

const Counter = (props) => {
    return (
        <>
            <button onClick={props.increaseCount}>+</button>
            <p>{props.count}</p>
            <button onClick={props.decreaseCount}>-</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        decreaseCount: () => dispatch(DECREASE_COUNT()),
        increaseCount: () => dispatch(INCREASE_COUNT())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter); 