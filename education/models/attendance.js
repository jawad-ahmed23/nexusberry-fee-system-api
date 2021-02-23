import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  registration: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Registration',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
  },
});

export default mongoose.model('Attendance', attendanceSchema);
