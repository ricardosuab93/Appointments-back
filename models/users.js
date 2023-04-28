const { mongoose } = require('mongoose')
const { Schema, Model } = require('mongoose')

const UserSchema = new Schema({
    name: String,
    lastname: String,
    phone: String,
    email: String,   
  },
  {
    timestamps: true,
    versionKey: false
  })
  
  const User = mongoose.model('User', UserSchema)
  
module.exports = {
    User
}