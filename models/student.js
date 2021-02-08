import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
  },
  trainingMode: {
    type: String,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  institution: {
    type: String,
  },
});

const StudentModel = mongoose.model('Student', studentSchema);
export default StudentModel;
