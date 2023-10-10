const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const courses = require('./courses.json')
const courseDetails = require('./courses-details.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('My server is running')
})

app.get('/courses', (req, res) => {
  res.send(courses);
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourse = courseDetails.find( c => c.id === id);
  res.send(selectedCourse);
})

app.listen(port, () => {
  console.log(`My server is running on port ${port}`)
})