import {connect} from 'react-redux'
import { changePropTwo } from './actions'

const Child = (props) => {
    return (
        <>
            <h1>Child Component</h1>
            <div>Property one from the store: {props.my_one}</div>
            <br/>
            <button onClick={props.changeTwo}>Change Prop two to Prop one</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        my_one: state.property_one
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTwo: () => dispatch(changePropTwo())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Child);