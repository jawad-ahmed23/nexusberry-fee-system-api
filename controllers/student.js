import StudentModel from '../models/student.js';

export const getAllStudents = async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.status(200).json({
      message: 'success',
      data: students,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createStudent = async (req, res) => {
  try {
    await StudentModel.create(req.body);
    res.status(201).json({
      message: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateStudent = async (req, res) => {
  try {
    await StudentModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(204).json({
      message: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    await StudentModel.findByIdAndRemove(req.params.id);
    res.status(204).json({ message: 'success' });
  } catch (error) {
    console.log(error);
  }
};
