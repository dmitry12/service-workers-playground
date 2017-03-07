const express = require('express');
const path = require('path');

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/api/products', (req, res) => {
    res.json({
        products: [
            {
                id: 1,
                name: 'Product 1',
                imageUrl: '/1.png',
            },
            {
                id: 2,
                name: 'Product 2',
            },
            {
                id: 3,
                name: 'Product 3',
            },
            {
                id: 4,
                name: 'Product 4',
            },
            {
                id: 5,
                name: 'Product 5',
            },
            {
                id: 6,
                name: 'Product 6',
            },
        ],
    });
});


app.get('/api/product/:productId', (req, res) => {
    const json = {
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

    const product = json.products.filter(p => {
        if (p.id === parseInt(req.params.productId, 10)) {
            return p;
        }
    });

    res.json(product[0]);
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


module.exports = app;
