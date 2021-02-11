import express from 'express';
import {
  getAllStaffEmployees,
  createStaffEmployee,
  getOneStaffEmployees,
} from '../controllers/staff.js';

const router = express.Router();

router.get('/', getAllStaffEmployees);
router.get('/:id', getOneStaffEmployees);
router.post('/', createStaffEmployee);

export default router;
