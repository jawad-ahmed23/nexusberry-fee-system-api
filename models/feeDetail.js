import mongoose from 'mongoose';

const feeDetailSchema = mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: [true, 'Fee Detail must belong to a Student.'],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Fee Detail must belong to a Course.'],
  },
  package: [Number],
  transactions: [
    {
      amount: {
        type: Number,
      },
      data: {
        type: Date,
        default: Date.now(),
      },
      medium: {
        type: String,
      },
      receivedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
        required: [true, 'Fee Datail must have receive by id'],
      },
      deposit: {
        type: Boolean,
        default: false,
      },
      note: {
        type: String,
      },
    },
  ],
  nextDueDate: {
    type: Date,
    default: Date.now(),
  },
});

const feeDetailModel = mongoose.model('FeeDetail', feeDetailSchema);

export default feeDetailModel;
