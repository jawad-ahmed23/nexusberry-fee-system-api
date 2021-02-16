import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  name: {
    type: String, // fullname
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
  },
  // trainingMode: {
  //   type: String, // online, physical
  // },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  jobStatus: {
    type: String, // Studying, doing job, doing business, not on job, freelancing
  },
  curOrganization: {
    type: String, // current org name
  },
  qualification: {
    type: String,
  },
  password: {
    type: String,
  },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
});

const StudentModel = mongoose.model('Student', studentSchema);
export default StudentModel;
