const express = require('express');
const app = express();

const productRoutes = require('./api/routes/Product');
const orderRoutes = require('./api/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;