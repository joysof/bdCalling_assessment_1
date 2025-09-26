

import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{type:String , required:true ,trim:true},
    lastName:{type:String , required:true ,trim:true},
    email:{type:String , required:true ,trim:true  ,unique:true},
    number:{type:String , required:true , trim: true, unique: true,},
    password:{type:String , required:true},
    confirmPassword:{type:String , required:true},
    termsAndCondition:{type:Boolean , required:true},
}, { timestamps: true })


const User = mongoose.model("User" , userSchema)

export default User