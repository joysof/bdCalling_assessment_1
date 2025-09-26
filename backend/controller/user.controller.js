

import mongoose  from "mongoose";
import bcrypt from 'bcryptjs'
import User from "../models/user.models.js";

const registion = async (req,res) =>{
    try {
        const { firstName, lastName, email, number, password, confirmPassword, termsAndCondition } = req.body;


        if (password !== confirmPassword){
            res.status(404).json({message: "Password do not match"})
        }
        const existingUser = await User.findOne({ $or: [{ email }, { number }] });
        if (existingUser ) {
            res.status(404).json({message: "Email or Number allready exits"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)

        const newUser = new User({
            firstName,
            lastName,
            number,
            email,
            password : hashedPassword,
            confirmPassword : hashedPassword,
            termsAndCondition
        })
        await newUser.save()
        res.status(201).json({message : "User registered"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message : "server error"})
    }
}

const login = async(req,res) =>{
    console.log("user password",User.password)
    try {
        const {email , password} = req.body;
        const user = await User.findOne({email})
        if (!user) {
            res.status(400).json({message : "User not fount"})    
        }
        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch) {
            res.status(400).json({message : "Invalit password"})
        }
        res.status(200).json({message: "login successful"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message : error.message})
    }

}
export  {registion ,login}