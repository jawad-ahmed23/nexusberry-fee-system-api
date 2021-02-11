import express from 'express';
import {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  getOneStudent,
} from '../controllers/student.js';

const router = express.Router();

router.get('/', getAllStudents);
router.get('/:id', getOneStudent);
router.post('/', createStudent);
router.patch('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;
