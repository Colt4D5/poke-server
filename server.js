require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const appRouter = require('./app')

const app = express()
const port = process.env.PORT || 5000

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use('/', appRouter)

// Start Server
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`)
})