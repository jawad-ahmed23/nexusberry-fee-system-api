import Registration from '../models/registration.js';

export const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json({
      message: 'succees',
      registrations,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error,
    });
  }
};

export const getOneRegistration = async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id)
      .populate('student')
      .populate('offering')
      .populate({
        path: 'transactions',
        populate: {
          path: 'staff',
          collection: 'Staff',
        },
      })
      .populate('teacher')
      .populate('course');
    res.status(200).json({
      message: 'succees',
      registration,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error,
    });
  }
};

export const createRegistration = async (req, res) => {
  try {
    await Registration.create(req.body);
    res.status(201).json({
      message: 'succees',
    });
  } catch (error) {
    res.status(400).json({
      message: 'fail',
      error,
    });
  }
};

export const updateRegistration = async (req, res) => {
  try {
    await Registration.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      message: 'succees',
    });
  } catch (error) {
    res.status(400).json({
      message: 'fail',
      error,
    });
  }
};

export const deleteRegistration = async (req, res) => {
  try {
    await Registration.findByIdAndDelete(req.params.id);
    res.status(204).json({
      message: 'succees',
    });
  } catch (error) {
    res.status(400).json({
      message: 'fail',
      error,
    });
  }
};
