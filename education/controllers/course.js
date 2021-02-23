import CourseModel from '../models/course.js';

export const getAllCourses = async (req, res) => {
  try {
    const courses = await CourseModel.find();

    res.status(200).json({
      status: 'success',
      data: courses,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      error,
    });
  }
};

export const getOneCourse = async (req, res) => {
  try {
    const course = await CourseModel.findById(req.params.id);
    // .populate(
    //   'teacher'
    // );

    res.status(200).json({
      status: 'success',
      data: course,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      error,
    });
  }
};

export const createCourse = async (req, res) => {
  try {
    await CourseModel.create(req.body);
    res.status(201).json({
      status: 'success',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
