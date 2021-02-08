import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import studentsRoute from './routes/students.js';
import teachersRoute from './routes/teacher.js';
import coursesRoute from './routes/course.js';
import feeDetailRoute from './routes/feeDetail.js';
import staffRoute from './routes/staff.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/api/students', studentsRoute);
app.use('/api/teachers', teachersRoute);
app.use('/api/courses', coursesRoute);
app.use('/api/fee-detail', feeDetailRoute);
app.use('/api/staff', staffRoute);

const PORT = process.env.PORT || 5000;

const url = `mongodb+srv://jawad-ahmed:${process.env.DB_PASSWORD}@cluster0.s3dj8.mongodb.net/nexusberry-fee-system?retryWrites=true&w=majority`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('server connected'))
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log('server is running on port 5000'));
