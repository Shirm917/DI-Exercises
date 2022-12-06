import {connect} from 'react-redux';
import {increaseCounter, decreaseCounter} from '../redux/actions/'

const Counter = (props) => {
    const incrementIfOdd = () => {
        if (props.count % 2 === 1) {
            props.increaseCounter()
        }
    }

    const incrementAsync = () => {
        setTimeout(() => {
            props.increaseCounter()
        }, 1000);
    }

    return (
        <div>
            <p>Clicked: {props.count} times</p>
            <button onClick={props.increaseCounter}>+</button><br/>
            <button onClick={props.decreaseCounter}>-</button><br/>
            <button onClick={incrementIfOdd}>Increment if odd</button><br/>
            <button onClick={incrementAsync}>Increment async</button><br/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),
        decreaseCounter: () => dispatch(decreaseCounter())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);