import express, { Router } from "express"
import {registion ,login, getProfile} from "../controller/user.controller.js"
import userAuth from "../middleware/user.middleware.js"

const userRouter = express.Router()

userRouter.post('/register' , registion)
userRouter.post('/login' , login)
userRouter.get('/profile' , userAuth , getProfile)

export default userRouter