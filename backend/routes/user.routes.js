import express, { Router } from "express"
import {registion ,login} from "../controller/user.controller.js"

const userRouter = express.Router()

userRouter.post('/register' , registion)
userRouter.post('/login' , login)

export default userRouter