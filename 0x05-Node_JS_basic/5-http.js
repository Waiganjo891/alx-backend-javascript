// 5-http.js

const http = require('http');
const fs = require('fs');
const path = require('path');

async function countStudents(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }
    const header = lines.shift().split(',');
    const students = lines.map((line) => line.split(','));
    const fields = {};
    students.forEach(student => {
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    });
    let output = `Number of students: ${students.length}\n`;
    for (const field in fields) {
      output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
    }
    return output.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
    const { url } = req;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (url === '/students') {
        const databasePath = process.argv[2];
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        try {
            const studentInfo = await countStudents(databasePath);
            res.end(`This is the list of our students\n${studentInfo}`);
        } catch (error) {
            res.end(`This is the list of our students\n${error.message}`);
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

app.listen(1245);
module.exports = app;
