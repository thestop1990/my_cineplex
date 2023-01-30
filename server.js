const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// - เวอร์ชั่น Express 4.16.0+ ขึ้นไป
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World')
})

// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes')
// using as middleware
app.use('/api/v1/employee', employeeRoutes)

// Require movie routes
const movieRoutes = require('./src/routes/movie.routes')
// using as middleware
app.use('/api/v1/movie', movieRoutes)



app.listen(port, () => {
  console.log('Start server at port ' + port)
})