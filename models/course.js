import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    unique: [true, 'title should be unique'],
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: [true, 'A course must belongs to a teacher'],
  },
  startDate: {
    type: Date,
    default: Date.now(),
  },
  durationsInMonths: {
    type: Number,
  },
  timeSlots: [
    {
      day: {
        type: String,
        default: Date.now(),
      },
      time: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  totalFee: {
    type: Number,
  },
  batch: {
    type: Number,
  },
  status: {
    type: String,
  },
  links: [
    {
      title: {
        type: String,
      },
      link: {
        type: String,
      },
    },
  ],
});

const courseModel = mongoose.model('Course', courseSchema);

export default courseModel;
