import express from 'express';
import {
  getOneRegistration,
  getAllRegistrations,
  createRegistration,
  deleteRegistration,
  updateRegistration,
} from '../controllers/registration.js';

const route = express.Router();

route.get('/', getAllRegistrations);
route.get('/:id', getOneRegistration);
route.post('/', createRegistration);
route.patch('/:id', updateRegistration);
route.delete('/:id', deleteRegistration);

export default route;
