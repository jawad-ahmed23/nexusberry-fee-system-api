import express from 'express';
import {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  getOneStudent,
} from '../controllers/student.js';

const route = express.Router();

route.get('/', getAllStudents);
route.get('/:id', getOneStudent);
route.post('/', createStudent);
route.patch('/:id', updateStudent);
route.delete('/:id', deleteStudent);

export default route;
