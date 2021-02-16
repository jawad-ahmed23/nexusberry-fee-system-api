import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    unique: [true, 'title should be unique'],
  },
  category: {
    type: String, // Design, Development, Marketing, IELTS
  },
  subCategory: {
    type: String, //
  },
  code: {
    type: String, // to include in batch
  },
  description: {
    type: String,
  },
  outline: {
    type: String,
  },
  preReq: {
    type: String, // pre-requisite
  },
  featured: {
    type: Boolean, // yes, no
  },
  track: {
    // specialization 1 or 2
    type: Number,
  },
});

export default mongoose.model('Course', courseSchema);
