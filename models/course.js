import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    unique: [true, 'title should be unique'],
  },
  category: {
    type: String,
  },
  subCategory: {
    type: String,
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
});

export default mongoose.model('Course', courseSchema);
