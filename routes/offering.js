import express from 'express';
import {
  getOneOffering,
  getAllOfferings,
  deleteOffering,
  createOffering,
  updateOffering,
} from '../controllers/Offering.js';

const route = express.Router();

route.get('/', getAllOfferings);
route.get('/:id', getOneOffering);
route.post('/', createOffering);
route.patch('/:id', updateOffering);
route.delete('/:id', deleteOffering);

export default route;
