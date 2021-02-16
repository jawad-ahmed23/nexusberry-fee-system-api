import express from 'express';
import {
  createTransaction,
  getTransactionsByDueDate,
  getTransactionsByDueDateForBatch,
} from '../controllers/transaction.js';

const router = express.Router();

router.post('/', createTransaction);

// submit student fee
router.post('/');

// Get All transactions by date range (all batches, all students);

router.post('/due-date', getTransactionsByDueDate);

// Get All transactions by date range for a batch (all students)
router.post('/registration/:registrationId', getTransactionsByDueDateForBatch);

// Get All transactions by date range for a student (multiple batches of a student);

// Get All transactions of a student in a batch (fee of student in one particualr batch)

export default router;
