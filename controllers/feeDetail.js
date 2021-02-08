import FeeDetail from '../models/feeDetail.js';

export const getAllFeeDetail = async (req, res) => {
  try {
    const feeDetail = await FeeDetail.find();
    res.status(200).json({
      message: 'success',
      data: feeDetail,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneFeeDetail = async (req, res) => {
  try {
    const feeDetail = await FeeDetail.findById(req.params.id)
      .populate({ path: 'student' })
      .populate('course')
      .populate({
        path: 'transactions',
        populate: {
          path: 'receivedBy',
          model: 'Staff',
        },
      });

    res.status(200).json({
      message: 'success',
      data: feeDetail,
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error,
    });
  }
};

export const createFeeDetail = async (req, res) => {
  try {
    await FeeDetail.create(req.body);
    res.status(201).json({
      message: 'success',
    });
  } catch (error) {
    res.status(404).json({
      message: 'fail',
      error,
    });
  }
};
