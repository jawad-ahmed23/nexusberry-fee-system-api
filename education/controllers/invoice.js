import Invoice from '../models/invoice.js';

export const createInvoice = async (req, res) => {
  try {
    const newInvoice = await Invoice.create(req.body);
    res.status(201).json({
      newInvoice,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
