import mongoose from 'mongoose';

const timeTableSchema = new mongoose.Schema({
  offering: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offering',
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
