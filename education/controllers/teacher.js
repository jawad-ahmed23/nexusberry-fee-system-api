import TeacherModel from '../models/teacher.js';

export const getAllTeacher = async (req, res) => {
  try {
    const teachers = await TeacherModel.find();
    res.status(200).json({
      message: 'success',
      data: teachers,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneTeacher = async (req, res) => {
  try {
    const teacher = await TeacherModel.findById(req.params.id);
    res.status(200).json({
      message: 'success',
      teacher,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error,
    });
  }
};

export const createTeacher = async (req, res) => {
  try {
    await TeacherModel.create(req.body);
    res.status(201).json({
      message: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTeacher = async (req, res) => {
  try {
    await TeacherModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(204).json({
      message: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    await TeacherModel.findByIdAndRemove(req.params.id);
    res.status(204).json({ message: 'success' });
  } catch (error) {
    console.log(error);
  }
};
