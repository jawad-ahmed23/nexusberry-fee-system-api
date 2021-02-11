import Registration from '../models/registration.js';

export const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json({
      message: 'succees',
      result: registrations.length,
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

// Registration for one offer
export const getOfferRegistrations = async (req, res) => {
  try {
    const registration = await Registration.find()
      .where('offering')
      .equals(req.params.offerId);
    res.status(200).json({
      message: 'success',
      result: registration.length,
      registration,
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      error,
    });
  }
};

// all registrations whose installments due dates are past or coming
export const getRegistrationsByDueDate = async (req, res) => {
  try {
    const { dateFrom, dateTo } = req.body;
    const from = new Date(dateFrom);
    const to = new Date(dateTo);
    const registrationsByDueDate = await Registration.find()
      .where('nextInstallmentDate')
      .lte(to)
      .gte(from);

    const currentDate = Date.now();

    const ByPastDueDate = await Registration.find()
      .where('nextInstallmentDate')
      .lte(currentDate);

    const ByComingDueDate = await Registration.find()
      .where('nextInstallmentDate')
      .gte(currentDate);

    res.status(200).json({
      message: 'success',
      result: registrationsByDueDate?.length,
      registrationsByDueDate,
      ByPastDueDate: {
        result: ByPastDueDate.length,
        ByPastDueDate,
      },
      ByComingDueDate: {
        result: ByComingDueDate.length,
        ByComingDueDate,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      error,
    });
  }
};

// student registration detail of all current and past offerings that he has attended
export const getStudentRegistrationDetail = async (req, res) => {
  try {
    const studentRegistrationsDetail = await Registration.find()
      .where('student')
      .equals(req.params.studentId);
    res.status(200).json({
      status: 'success',
      result: studentRegistrationsDetail.length,
      studentRegistrationsDetail,
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      error,
    });
  }
};

export const changeOffer = async (req, res) => {
  try {
    const { studentId } = req.params;
    const { currentOfferId, destOfferId } = req.body;
    const find = await Registration.findOneAndUpdate(
      {
        student: studentId,
        offering: currentOfferId,
      },
      { offering: destOfferId },
      { new: true }
    );

    res.status(200).json({
      status: 'success',
      find,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      error,
    });
  }
};
