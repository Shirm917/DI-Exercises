import React from 'react';

class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            searchText: "",
            name: "",
            price: ""
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/products")
        .then(result => result.json())
        .then(data => {
            this.setState({products: data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    searchValue = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    searchApi = () => {
        fetch(`http://localhost:3000/api/search?q=${this.state.searchText}`)
        .then(result => result.json())
        .then(data => {
            this.setState({products: data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    addProduct = (event) => {
        const {name, price} = this.state;
        event.preventDefault();
        fetch("http://localhost:3000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                price
            })
        })
        .then(result => result.json())
        .then(data => {
            this.setState({products: data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="search">Search</label>
                    <input type="text" id="search" name="searchText" onChange={this.searchValue}/>
                    <button onClick={this.searchApi}>Search</button>
                </div>
                <div>
                    <h2>Add product</h2>
                    <form onSubmit={this.addProduct}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={this.searchValue}/>
                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" name="price" onChange={this.searchValue}/>
                    <input type="submit" value="Add Product" />
                    </form>
                </div>
                {
                    this.state.products.map(element => {
                        return (
                            <div key={element.id} 
                            style={{
                                display: "inline-block",
                                margin: "20px",
                                padding: "20px",
                                border: "1px solid #fff"
                            }}>
                                <h2>{element.name}</h2>
                                <p>{element.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Products;