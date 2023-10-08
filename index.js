const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const courses = require('./courses.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('My server is running')
})

app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourseDetail = 'a'
})

app.listen(port, () => {
  console.log(`My server is running on port ${port}`)
})