import mongoose from 'mongoose';

const examSchema = mongoose.Schema({
  // exams //////////////////////////////////////////////////////////////////
  registration: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true],
    ref: 'Registration',
  },
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

export default mongoose.model('Exam', examSchema);
