import mongoose from 'mongoose';

const transactionSchema = mongoose.Schema({
  registration: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Registration',
    required: [true, 'Transaction must ref to registation'],
  },
  amount: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  medium: {
    type: String, // cash, jazzcash, easypaissa, bank
    default: 'Cash',
  },
  staff: {
    // name of staff who received fee
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
    required: [true, 'Fee Datail must have receive by id'],
  },
  depositedTo: {
    type: String, // fee dopisited by staff to account/director
  },
  depositeDate: {
    // when he/she deposit to account
    type: Date,
    default: Date.now(),
  },
  verified: {
    type: Boolean,
    default: false,
  },
  note: {
    type: String,
  },
});

transactionSchema.pre(/^find/, function (next) {
  this.populate({ path: 'registration', select: '-__v' }).populate({
    path: 'staff',
    select: '-__v',
  });
  next();
});

export default mongoose.model('Transaction', transactionSchema);
