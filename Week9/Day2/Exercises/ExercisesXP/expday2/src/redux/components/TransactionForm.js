import React from 'react';
import {connect} from 'react-redux';
import { update,insert } from '../actions/transactionActions';

class TransactionForm extends React.Component {
    constructor() {
        super();
        this.state = {
            accountNumber: "",
            FSC: "",
            name: "",
            amount: ""
        }
    }

    componentDidUpdate(prevProps) {
        const {list,currentIndex} = this.props;
        if(prevProps.currentIndex !== this.props.currentIndex && this.props.currentIndex !== -1) {
            const transaction = this.props.list[this.props.currentIndex];
            this.setState({
                accountNumber: transaction.accountNumber || "",
                FSC: transaction.FSC || "",
                name: transaction.name || "",
                amount: transaction.amount || ""
            })
        }
    }

    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.props.currentIndex === -1) {
            this.props.insert(this.state);
        } else {
            this.props.update(this.state);
        }
    }

    render() {
        const {accountNumber,FSC,name,amount} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="accountNumber" placeholder="Account Number" value={accountNumber} onChange={this.handleInputChange}/><br/>
                    <input type="text" name="FSC" placeholder="FSC" value={FSC}  onChange={this.handleInputChange}/><br/>
                    <input type="text" name="name" placeholder="Name" value={name}  onChange={this.handleInputChange}/><br/>
                    <input type="text" name="amount" placeholder="Amount" value={amount}  onChange={this.handleInputChange}/><br/>
                    <input type="submit" value={this.props.currentIndex === -1 ? "Submit":"Update"}/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        insert: (data) => dispatch(insert(data)),
        update: (data) => dispatch(update(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TransactionForm);