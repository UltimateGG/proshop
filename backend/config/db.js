import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });

        console.log(`Connected to database - ${conn.connection.host}`.cyan.underline);
    } catch (e) {
        console.error('Error connecting to database: '.red.underline.bold, e);
        process.exit(1);
    }
}

export default connectDB;