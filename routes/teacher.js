import express from 'express';
import {
  getAllTeacher,
  updateTeacher,
  deleteTeacher,
  createTeacher,
} from '../controllers/teacher.js';

const route = express.Router();

route.get('/', getAllTeacher);
route.post('/', createTeacher);
route.patch('/:id', updateTeacher);
route.delete('/:id', deleteTeacher);

export default route;
