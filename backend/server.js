import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()


const app = express()
const port = process.env.PORT || 4000
// middleware 

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended :true}))


app.listen(port ,() =>{
    console.log(`your server is runnig at localhost:${port}`)
})