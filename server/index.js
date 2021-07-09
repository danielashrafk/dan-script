import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from 'express';
import bodyParser from 'body-parser';
import cors from'cors';
import dotenv from 'dotenv';
import fileRoutes from './routes/file.js';
dotenv.config();
const fileUpload = require('express-fileupload');
const app = express();
const mongoose = require("mongoose");

const corsOptions = {
    origin: 'http://localhost:5000',
  }
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());
app.use('/file', fileRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

