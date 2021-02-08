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
});

const staffModel = mongoose.model('Staff', staffSchema);

export default staffModel;
