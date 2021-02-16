import mongoose from 'mongoose';

const offeringSchema = mongoose.Schema({
  batch: {
    type: String, // branch(code)-course(code aaa)-session(yymm)-batch(autoIncrement 000)
  },
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
  end: {
    type: Boolean,
    default: false,
  },
});

offeringSchema.pre(/^find/, function (next) {
  this.populate({ path: 'teacher', select: '-__v' }).populate({
    path: 'course',
    select: '-__v',
  });
  next();
});

export default mongoose.model('Offering', offeringSchema);
