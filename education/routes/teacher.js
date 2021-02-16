import express from 'express';
import {
  getAllTeacher,
  updateTeacher,
  deleteTeacher,
  createTeacher,
  getOneTeacher,
} from '../controllers/teacher.js';

const router = express.Router();

router.get('/', getAllTeacher);
router.get('/:id', getOneTeacher);
router.post('/', createTeacher);
router.patch('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);

export default router;
