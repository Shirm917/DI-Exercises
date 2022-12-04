import React from 'react';
import {connect} from 'react-redux'
import { DECREASE_COUNT, INCREASE_COUNT } from '../actions';

class Counter extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <button onClick={this.props.increaseCount}>+</button>
                <p>{this.props.count}</p>
                <button onClick={this.props.decreaseCount}>-</button>
            </>
        )
    }
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