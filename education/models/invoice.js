import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  data: {
    type: Date,
    default: Date.now(),
  },
  studentName: {
    type: String,
  },
  registration: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Registraion',
    required: [true, 'invoice must belong to a course'],
  },
  paidFee: {
    type: Number,
  },
  remainingBalance: {
    type: Number,
  },
  remainingDueDate: {
    type: Date,
  },
});

export default mongoose.model('Invoice', invoiceSchema);
