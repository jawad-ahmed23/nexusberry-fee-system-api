import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import {
  studentsRoute,
  teachersRoute,
  coursesRoute,
  staffRoute,
  offeringRoute,
  registrationRoute,
  transactionRoute,
} from './education/routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/students', studentsRoute);
app.use('/api/teachers', teachersRoute);
app.use('/api/courses', coursesRoute);
app.use('/api/staffs', staffRoute);
app.use('/api/offerings', offeringRoute);
app.use('/api/registrations', registrationRoute);
app.use('/api/transactions', transactionRoute);

const PORT = process.env.PORT || 5000;

const url = `mongodb+srv://jawad-ahmed:${process.env.DB_PASSWORD}@cluster0.glsui.mongodb.net/nexusberry-api?retryWrites=true&w=majority`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('server connected'))
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
