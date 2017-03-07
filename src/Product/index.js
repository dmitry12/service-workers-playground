import React, { Component } from 'react';
import './product.css';


class Product extends Component {

    state = {
      isOnline: true,
      curProduct: {},
    }

    componentWillMount() {
      this.setState({isOnline: navigator.onLine});

      fetch('/api/product/' + this.props.params.productId)
        .then((res) => res.json())
        .then((res) => this.setState({ curProduct: res }));
    }

    render() {
        return (
            <div className="Product">
                <div className="Product-header">
                    <h2>{this.state.curProduct.name}</h2>
                </div>
                <div className="Product-data">
                  <img src={`https://dummyimage.com/250x250/000/fff&text=${this.state.curProduct.name}`} />
                  <span>Some Text about product</span>
                </div>

            </div>
        );
    }
}

export default Product;
