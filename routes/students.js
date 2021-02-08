import express from 'express';
import {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/student.js';

const route = express.Router();

route.get('/', getAllStudents);
route.post('/', createStudent);
route.patch('/:id', updateStudent);
route.delete('/:id', deleteStudent);

export default route;
