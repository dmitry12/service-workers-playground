import React, { Component } from 'react';
import './product.css';


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

    findProduct = (data) => data.id === parseInt(this.props.params.productId, 10);

    render() {
      console.log(this.state);

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
