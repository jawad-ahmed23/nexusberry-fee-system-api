import Offering from '../models/offering.js';

export const getAllOfferings = async (req, res) => {
  try {
    const offerings = await Offering.find();
    res.status(200).json({
      message: 'succees',
      result: offerings.length,
      offerings,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error,
    });
  }
};

export const getOneOffering = async (req, res) => {
  try {
    const offering = await Offering.findById(req.params.id);
    res.status(200).json({
      message: 'succees',
      result: offering.length,
      offering,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error,
    });
  }
};

export const createOffering = async (req, res) => {
  try {
    await Offering.create(req.body);
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

export const updateOffering = async (req, res) => {
  try {
    await Offering.findByIdAndUpdate(req.params.id, req.body, { new: true });
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

export const deleteOffering = async (req, res) => {
  try {
    await Offering.findByIdAndDelete(req.params.id);
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
