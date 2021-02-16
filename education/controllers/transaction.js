import mongoose from 'mongoose';
import Transaction from '../models/transaction.js';

export const createTransaction = async (req, res) => {
  try {
    await Transaction.create(req.body);
    res.status(201).json({
      message: 'created!',
    });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
};

export const getTransactionsByDueDate = async (req, res) => {
  try {
    const { dateFrom, dateTo } = req.body;
    const from = new Date(dateFrom);
    const to = new Date(dateTo);
    const transactionsByDueDate = await Transaction.find({
      $and: [{ date: { $lte: to } }, { date: { $gte: from } }],
    });
    res.status(200).json({
      status: 'success',
      result: transactionsByDueDate.length,
      transactionsByDueDate,
    });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
};

export const getTransactionsByDueDateForBatch = async (req, res) => {
  try {
    const { dateFrom, dateTo } = req.body;
    const from = new Date(dateFrom);
    const to = new Date(dateTo);
    const { registrationId } = req.params;
    const batchTransactions = await Transaction.find({
      registration: registrationId,
      $and: [{ date: { $lte: to } }, { date: { $gte: from } }],
    });
    res.status(200).json({
      batchTransactions,
      result: batchTransactions.length,
      status: 'success',
    });
  } catch (error) {
    res.status(400).json({ status: 'error', error });
  }
};

// date
// state // p,a,
// ref registration

// total classes
// student classes
