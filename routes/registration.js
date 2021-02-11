import express from 'express';
import {
  getOneRegistration,
  getAllRegistrations,
  createRegistration,
  deleteRegistration,
  updateRegistration,
  getOfferRegistrations,
  getRegistrationsByDueDate,
  getStudentRegistrationDetail,
  changeOffer,
} from '../controllers/registration.js';

const router = express.Router();

router.get('/all', getAllRegistrations); // all present and past students in any course
router.get('/offer/:offerId', getOfferRegistrations); // all students in a batch

// router.get('/due-date/:dueDateFrom/:dueDateTo', getRegistrationsByDueDate);
router.post('/due-date', getRegistrationsByDueDate);

// student registration detail of all current and past offerings that he has attended
router.get('/student-detail/:studentId', getStudentRegistrationDetail);

// update student offer Id get currentOfferId and change it destination offer Id
router.put('/change-offer/:studentId', changeOffer); // update offer Id

// router.put('/submit-installment/:offerId/:studentId', submitInstallment);
// transaction object in request body

// router.get('/transaction/from/:date/to/:date', getTransactions); // Date wise fee detail
// router.get('/transation/offer'); // offering wise fee detail
// teacher wise fee detail
router.put('/:id', updateRegistration);

router.post('/', createRegistration);
router.delete('/:id', deleteRegistration);

export default router;
