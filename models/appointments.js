const { mongoose }  = require('mongoose')
const { Schema, Model } = require('mongoose')

const AppointmentSchema = new Schema({
    appointmentType: {
      type: String,
      enum: [
        'Particular', 'Comunitaria'
      ]
    },
    appointmentOption: {
      type: String,
      enum: ['Difunto', 'Salud', 'Onomastico']
    },
    appointmentPayment: {
      type: String,
      enum: ['Efectivo', 'Yape/Plin', 'Otros']
    },
    fullName: String,
    offeredBy: String,
    comments: String,
    date: String,
    time: String
  },
  {
    timestamps:true,
    versionKey: false
  }
  )
  
  const Appointment = mongoose.model('Appointment', AppointmentSchema)
  
module.exports = {
    Appointment
}