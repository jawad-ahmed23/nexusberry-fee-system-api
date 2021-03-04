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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transaction',
    },
  ],
  staffNotes: [
    {
      date: {
        type: Date,
      },
      note: {
        type: String,
      },
      staff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
      },
    },
  ],
});

// registrationSchema.pre(/^find/, function (next) {
//   this.populate({ path: 'offering', select: '-__v' })
//     .populate({
//       path: 'student',
//       select: '-__v',
//     })
//     .populate('transactions')
//     .populate({
//       path: 'staffNotes.staff',
//     });
//   next();
// });

export default mongoose.model('Registration', registrationSchema);

// Time table

// day
// Time
// room no.

// one day
