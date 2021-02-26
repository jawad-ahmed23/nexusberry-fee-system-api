import express from 'express';
import {
  getAllRegistrations,
  createRegistration,
  deleteRegistration,
  updateRegistration,
  getOfferRegistrations,
  getRegistrationsByDueDate,
  getStudentRegistrationDetail,
  changeOffer,
  submitInstallment,
  getTransactions,
  getOneRegistration,
} from '../controllers/registration.js';

const router = express.Router();

router.get('/all', getAllRegistrations); // all present and past students in any course

router.get('/:registrationId', getOneRegistration);

router.get('/offer/:offerId', getOfferRegistrations); // all students in a batch

// router.get('/due-date/:dueDateFrom/:dueDateTo', getRegistrationsByDueDate);
router.post('/due-date', getRegistrationsByDueDate);

// student registration detail of all current and past offerings that he has attended
router.get('/student-detail/:studentId', getStudentRegistrationDetail);

// update student offer Id get currentOfferId and change it destination offer Id
router.put('/change-batch/:studentId', changeOffer); // update offer Id

router.put(
  '/submit-installment/offer/:offerId/student/:studentId',
  submitInstallment
);
// transaction object in request body

// router.get('/transactions/:registrationId', getTransactions); // Date wise fee detail
// router.get('/transation/offer'); // offering wise fee detail

router.put('/:id', updateRegistration);

router.post('/', createRegistration);
router.delete('/:id', deleteRegistration);

export default router;
