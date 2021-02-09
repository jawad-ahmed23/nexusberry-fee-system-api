import StaffModel from '../models/staff.js';

export const getAllStaffEmployees = async (req, res) => {
  try {
    const staff = await StaffModel.find();
    res.status(200).json({
      message: 'success',
      data: staff,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneStaffEmployees = async (req, res) => {
  try {
    const staffEmployee = await StaffModel.findById(req.params.id);
    res.status(200).json({
      message: 'success',
      staffEmployee,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error,
    });
  }
};

export const createStaffEmployee = async (req, res) => {
  try {
    await StaffModel.create(req.body);
    res.status(201).json({
      message: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};
