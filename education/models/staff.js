import mongoose from 'mongoose';

const staffSchema = mongoose.Schema({
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
  designation: {
    type: String,
  },
  jobDescription: {
    type: String,
  },
  prevOrganization: {
    type: String, // previous organization name
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

const staffModel = mongoose.model('Staff', staffSchema);

export default staffModel;
