import express from 'express';
import {
  getOneOffering,
  getAllOfferings,
  deleteOffering,
  createOffering,
  updateOffering,
  getCurrentOfferings,
  getPastOfferings,
} from '../controllers/Offering.js';

const router = express.Router();

router.get('/', getAllOfferings); // all offerings current and past
router.get('/current', getCurrentOfferings); // all offererings whose end is false
router.get('/past', getPastOfferings); // all offerering whose end is true

router.get('/:id', getOneOffering);

router.post('/', createOffering);
router.put('/:id', updateOffering);
router.delete('/:id', deleteOffering);

export default router;
