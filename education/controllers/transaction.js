import Transaction from '../models/transaction.js';

export const createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json({
      status: 'created',
      transaction,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
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
    res.status(400).json({
      status: 'fail',
      error,
    });
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
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

export const getTransactionReceiptByRegistration = async (req, res) => {
  try {
    const { registrationId } = req.params;
    const { date } = req.body;
    const transactionDate = new Date(date);
    const transaction = await Transaction.find({
      $and: [
        { registration: registrationId },
        { date: { $lte: transactionDate } },
      ],
    });

    res.status(200).json({
      status: 'success',
      result: transaction.length,
      transaction,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      error,
    });
  }
};

// date
// state // p,a,
// ref registration

// total classes
// student classes
