import {connect} from 'react-redux'
// import { DECREASE_COUNT, INCREASE_COUNT } from '../actions';
import Increase from './Increase';
import Decrease from './Decrease';

const Counter = (props) => {
    return (
        <>
            {/* <button onClick={props.increaseCount}>+</button> */}
            <Increase/>
            <p>{props.count}</p>
            <Decrease/>
            {/* <button onClick={props.decreaseCount}>-</button> */}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         decreaseCount: () => dispatch(DECREASE_COUNT()),
//         increaseCount: () => dispatch(INCREASE_COUNT())
//     }
// }


export default connect(mapStateToProps)(Counter); 