import express from 'express';
import {
  getAllStaffEmployees,
  createStaffEmployee,
} from '../controllers/staff.js';

const route = express.Router();

route.get('/', getAllStaffEmployees);
route.post('/', createStaffEmployee);

export default route;
