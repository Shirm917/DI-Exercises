import TransactionForm from "./TransactionForm";
import {connect} from 'react-redux';
import { deleteId, updateIndex } from "../actions/transactionActions";

const TransactionList = (props) => {
    const handleEdit = (index) => {
        props.updateIndex(index);
    }

    const handleDelete = (index) => {
        props.deleteId(index);
    }
    return (
        <div>
            <TransactionForm />
            <hr/>
            {
                props.list.map((transaction,index) => {
                    return (
                        <div key={index}>
                            <br/>
                            <span style={{border: "2px solid black"}}>{transaction.accountNumber}</span>
                            <span style={{border: "2px solid black"}}>{transaction.name}</span>
                            <span style={{border: "2px solid black"}}>{transaction.amount}</span>
                            <button onClick={(i) => handleEdit(index)}>Edit</button>
                            <button onClick={(id) => handleDelete(index)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateIndex: (index) => dispatch(updateIndex(index)),
        deleteId: (id) => dispatch(deleteId(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionList);