import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import dbConnection from './config/db.js'
import {errorMiddleware} from './error/error.js'
import reservationRouter from './routes/reservationRoute.js'

dotenv.config()

const app= express()

app.use(express.json())

// connection datbase
dbConnection()

// cors implementation
app.use(cors(
    {
        origin:[process.env.FRONTEND_URL],
        methods:["POST","GET","PUT","DELETE"],
        credentials:true,
    }
))

app.use(express.urlencoded({extended:true}))

// routes
app.use('/reservation',reservationRouter)

// for error handling
app.use(errorMiddleware)

export default app