var express = require('express');
var app = express();

app.get('/products', function(req, res){
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
});
});

app.listen(3000);
