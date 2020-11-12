import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

const PORT = process.env.PORT || 5000;

import products from './data/products.js';
import connectDB from './config/db.js';
import colors from 'colors';

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id);

    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.green.bold);
});