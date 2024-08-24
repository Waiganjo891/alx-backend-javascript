// File: 3-read_file_async.js

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.promises.readFile(path, 'utf-8')
      .then((data) => {
        const rows = data.split('\n').filter(line => line.trim() !== '');
        const headers = rows.shift().split(',');
        const students = {};
        let totalStudents = 0;
        rows.forEach((row) => {
          const studentData = row.split(',');
          if (studentData.length >= 4) {
            totalStudents += 1;
            const field = studentData[3];
            const firstName = studentData[0];
            if (!students[field]) {
              students[field] = [];
            }
            students[field].push(firstName);
          }
        });
        console.log(`Number of students: ${totalStudents}`);
        for (const field in students) {
          const count = students[field].length;
          const list = students[field].join(', ');
          console.log(`Number of students in ${field}: ${count}. List: ${list}`);
        }
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
