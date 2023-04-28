const { Router } = require('express')
const router = Router();

const { getAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment } = require('../controllers/appointments.js')

router.get('/', getAppointments )
router.get('/:id', getAppointmentById )
router.post('/', createAppointment )
router.put('/:id', updateAppointment )
router.delete('/:id', deleteAppointment )


module.exports = router
