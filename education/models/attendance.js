import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  status: {
    type: String,
  },
  registration: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Registration',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model('Attendance', attendanceSchema);
