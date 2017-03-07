import React, { Component } from 'react';

class Products extends Component {
    render() {
        console.log(window.json);
        return (
            <div className="Products">
                <div className="Products-header">
                    <h2>Some Nice Products</h2>
                </div>
            </div>
        );
    }
}

export default Products;
