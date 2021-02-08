import express from 'express';
import {
  getAllFeeDetail,
  createFeeDetail,
  getOneFeeDetail,
} from '../controllers/feeDetail.js';

const route = express.Router();

route.get('/', getAllFeeDetail);
route.get('/:id', getOneFeeDetail);
route.post('/', createFeeDetail);

export default route;
