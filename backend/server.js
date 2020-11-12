import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

const PORT = process.env.PORT || 5000;

import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

connectDB();

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.green.bold);
});