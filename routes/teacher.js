import express from 'express';
import {
  getAllTeacher,
  updateTeacher,
  deleteTeacher,
  createTeacher,
  getOneTeacher,
} from '../controllers/teacher.js';

const route = express.Router();

route.get('/', getAllTeacher);
route.get('/:id', getOneTeacher);
route.post('/', createTeacher);
route.patch('/:id', updateTeacher);
route.delete('/:id', deleteTeacher);

export default route;
