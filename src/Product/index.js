import React, { Component } from 'react';

class Product extends Component {

    state = {
        isOnline: true,
        curProduct: {},
    }

    componentWillMount() {
        this.setState({isOnline: navigator.onLine});
    }

    componentDidMount() {
      this.setState({curProduct: window.json.products.find(this.findProduct)})
    }

    findProduct = (data) => data.id == this.props.params.productId;

    render() {
        console.log(this.state);
        return (
            <div className="Product">
                <div className="Product-header">
                    <h2>{this.state.curProduct.name}</h2>
                </div>
                <p className="Product-info">
                    <ul>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                        <li>Point 4</li>
                    </ul>
                </p>
            </div>
        );
    }
}

export default Product;
