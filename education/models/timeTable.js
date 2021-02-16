import mongoose from 'mongoose';

const timeTableSchema = new mongoose.Schema({
  registration: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Registration',
  },
  day: {
    type: String,
  },
  time: {
    type: Date,
  },
  roomNo: {
    type: Number,
  },
});

export default mongoose.model('TimeTable', timeTableSchema);

// Time table

// day
// Time
// room no.

// one day
