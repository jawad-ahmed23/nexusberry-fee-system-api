import express from 'express';
import {
  getAllCourses,
  createCourse,
  getOneCourse,
} from '../controllers/course.js';

const router = express.Router();

router.get('/', getAllCourses);
router.get('/:id', getOneCourse);
router.post('/', createCourse);

export default router;
