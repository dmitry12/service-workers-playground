import React, { Component } from 'react';
import { Link } from 'react-router'

class Products extends Component {
    render() {
        const productList = window.json.products.map(product =>
            <div>
                <Link to={`/product/${product.id}`}>
                    {product.name}
                </Link>
            </div>
        );
        return (
            <div className="Products">
                <div className="Products-header">
                    <h2>Some Nice Products</h2>

                    {productList}
                </div>
            </div>
        );
    }
}

export default Products;
