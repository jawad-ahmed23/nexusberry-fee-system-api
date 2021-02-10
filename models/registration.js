import mongoose from 'mongoose';
// route to transfer section
const registrationSchema = mongoose.Schema({
  // registration /////////////////////////////////////////////////
  offering: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offering',
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
  },
  trainingMode: {
    type: String, // online, physical
  },
  // account /////////////////////////////////////////////////////////
  registraionFee: {
    type: Number,
    default: 0,
  },
  totalFeePackage: {
    type: Number,
  },
  installments: [Number],
  nextInstallmentDate: {
    type: Date,
    default: Date.now(),
  },
  transactions: [
    {
      amount: {
        type: Number,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
      medium: {
        type: String, // cash, jazzcash, easypaissa, bank
      },
      staff: {
        // name of staff who received fee
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
        required: [true, 'Fee Datail must have receive by id'],
      },
      deposit: {
        // fee dopisited by staff to account/director
        type: Boolean,
        default: false,
      },
      note: {
        type: String,
      },
    },
  ],
  // exams //////////////////////////////////////////////////////////////////
  result: {
    type: String, // pass, fail, left incomplete, course continue
    default: 'Course Continue',
  },
  certificate: {
    type: String, // applied, issued, not elligible
    default: 'Not Elligible',
  },
  note: {
    type: String, // section change
  },
});

registrationSchema.pre(/^find/, function (next) {
  this.populate('offering').populate('student');
  next();
});

export default mongoose.model('Registration', registrationSchema);
