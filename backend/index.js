import express from 'express';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';

dotenv.config()

const port = process.env.PORT

const app = express();

// Middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Middleware for handling CORS POLICY
const corsOptions = {
  origin: "https://library-management-henna.vercel.app",
  credentials: true,
};
app.use(cors(corsOptions));

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Library management system');
});

app.use('/books', booksRoute);
app.use('/user', userRoute);

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(port, () => {
      console.log(`App is listening to port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
