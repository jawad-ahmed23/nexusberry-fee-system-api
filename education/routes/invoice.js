import express from 'express';
import { createInvoice } from '../controllers/invoice.js';

const router = express.Router();

// create fee invoice
router.post('/create', createInvoice);

export default router;
