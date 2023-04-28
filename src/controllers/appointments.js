const { httpError } = require('../helpers/handleError.js');
const mongoose = require('mongoose')
const { Appointment } = require('../../models/appointments.js')

const parseId = (id) => {
    return new mongoose.Types.ObjectId(id)
}

const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({})
        res.send({ data : appointments })
    } catch (error) {
        console.log(error)
    }
}

const getAppointmentById = async (req, res) => {
    const { id } = req.params
    // console.log(id)
    // console.log(typeof(id))
    try {
        const appointment = await Appointment.findOne({ _id : id })
        res.send({ data : appointment })
    } catch (error) {
        console.log(error)
    }
}

const createAppointment = async (req, res) => {
    try {
        const { appointmentType, appointmentOption, appointmentPayment, fullName, offeredBy, comments, date, time } = req.body
        const newAppointment = await Appointment.create({
            appointmentType, appointmentOption, appointmentPayment, fullName, offeredBy, comments, date, time
        })
        res.send({ data: newAppointment })
    } catch (error) {
        console.log(error)
    }
}

const updateAppointment = async (req, res) => {
    const { id } = req.params
    const { appointmentType, appointmentOption, appointmentPayment, fullName, offeredBy, comments, date, time } = req.body

    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate( parseId(id), {
            appointmentType, appointmentOption, appointmentPayment, fullName, offeredBy, comments, date, time
        },
        {updated: true}
        )
        res.status(200).send({ data: 'Actualizado exitosamente' })
    } catch (error) {
        httpError(res, error)
    }

}

const deleteAppointment = async (req, res) => {
    const { id } = req.params
    try {
        const deleted = await Appointment.deleteOne({ _id : parseId(id) })
        res.status(200).send({ data: deleted })        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment
}