import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config()
console.log('DB COnnetion',process.env.MONGO_URI)
import connectDB from './config/db.js'
import ticketRoutes from './routes/ticketRoutes.js'
import userRoutes from './routes/userRoutes.js'
import emailRoutes from './routes/emailRoutes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import templateRoutes from "./routes/templateRoutes.js"

connectDB()
const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(cors());
app.use(cookieParser());
app.use(express.json())
app.use(express.static('public'))
app.use('/api/tickets', ticketRoutes)
app.use('/api/', userRoutes)
app.use('/api/', emailRoutes)
app.use('/api/template',templateRoutes)



const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))



if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
