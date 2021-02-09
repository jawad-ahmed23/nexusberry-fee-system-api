import mongoose from 'mongoose';

const offeringSchema = mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  duration: {
    type: Number,
  },
  timeSlots: [
    {
      day: {
        type: String,
      },
      time: {
        type: Date,
      },
    },
  ],
  links: [
    {
      title: String, // Google Class Room, Facebook Group, Whatsapp Group, Online Meeting Link
      link: String,
    },
  ],
  startDate: {
    type: Date,
  },
  offerDate: {
    type: Date,
    default: Date.now(),
  },
  admissionOpenStatus: {
    type: Boolean,
    default: true,
  },
  finishStatus: {
    type: String, // continue, finished
    default: 'continue',
  },
  batchNo: {
    type: Number,
  },
});

export default mongoose.model('Offering', offeringSchema);
