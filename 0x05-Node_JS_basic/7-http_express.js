const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFile = process.argv[2];
  countStudents(databaseFile)
    .then(() => {
      res.set('Content-Type', 'text/plain');
      res.send('This is the list of our students\n');
    })
    .catch((error) => {
      res.set('Content-Type', 'text/plain');
      res.status(500).send(error.message);
    });
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
