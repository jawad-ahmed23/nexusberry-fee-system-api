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
  jobStatus: {
    type: String, // Studying, doing job, doing business, not on job, freelancing
  },
  curOrganization: {
    type: String, // current org name
  },
  joiningDate: {
    type: Date,
  },
  salary: {
    type: Number,
  },
  qualification: {
    type: String,
  },
  password: {
    type: String,
  },
});

const TeacherModel = mongoose.model('Teacher', teacherSchema);

export default TeacherModel;
