import express from 'express';
import {
  getAllCourses,
  createCourse,
  findOneCourse,
} from '../controllers/course.js';

const route = express.Router();

route.get('/', getAllCourses);
route.get('/:id', findOneCourse);
route.post('/', createCourse);

export default route;
