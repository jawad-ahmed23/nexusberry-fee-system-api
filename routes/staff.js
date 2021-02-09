import express from 'express';
import {
  getAllStaffEmployees,
  createStaffEmployee,
  getOneStaffEmployees,
} from '../controllers/staff.js';

const route = express.Router();

route.get('/', getAllStaffEmployees);
route.get('/:id', getOneStaffEmployees);
route.post('/', createStaffEmployee);

export default route;
