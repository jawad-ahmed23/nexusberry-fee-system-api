import mongoose from 'mongoose';

const teacherSchema = mongoose.Schema({
  name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
  },
  note: {
    type: String,
  },
});

const TeacherModel = mongoose.model('Teacher', teacherSchema);

export default TeacherModel;
