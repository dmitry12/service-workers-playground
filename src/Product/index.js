import React, { Component } from 'react';

class Product extends Component {

  state = {
    isOnline: true,
  }

  componentWillMount() {
    this.setState({isOnline: navigator.onLine});
  }

  render() {
    return (
      <div className="Product">
        <div className="Product-header">
          <h2>Some Nice Product</h2>
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
