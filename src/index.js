import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Products from './Products';
import Product from './Product';
import { ServiceWorker } from './serviceWorker';
import { Router, Route, Link, browserHistory } from 'react-router'
import './index.css';

//ServiceWorker();

window.json = {
    products: [
        {
            id: 1,
            name: 'Product 1',
            imageUrl: '/1.png',
        },
        {
            id: 2,
            name: 'Product 2',
            imageUrl: '/2.png',
        },
        {
            id: 3,
            name: 'Product 3',
            imageUrl: '/3.png',
        },
        {
            id: 4,
            name: 'Product 4',
            imageUrl: '/4.png',
        },
        {
            id: 5,
            name: 'Product 5',
            imageUrl: '/5.png',
        },
        {
            id: 6,
            name: 'Product 6',
            imageUrl: '/6.png',
        },
    ],
};

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
        <Route path="/products" component={Products} />
        <Route path="/product/:productId" component={Product} />
    </Router>
), document.getElementById('root'))
