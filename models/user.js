const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Hospital_id:{type:Number , unique:true},
        Hospital_Name:{type:String},
        Password:{type:String},
        Contact_Number:{type:Number},
        License_Number:{type:Number },
        Registration_Number:{type:Number},
        Hospital_Type:{type:String},
        Address:{type:String},
        City:{type:String},
        State:{type:String},
        Pincode:{type:Number}
},  { collection: 'HospitalSignup'}
)

module.exports = mongoose.model('user', userSchema)