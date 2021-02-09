import express from 'express';
import {
  getAllCourses,
  createCourse,
  getOneCourse,
} from '../controllers/course.js';

const route = express.Router();

route.get('/', getAllCourses);
route.get('/:id', getOneCourse);
route.post('/', createCourse);

export default route;
