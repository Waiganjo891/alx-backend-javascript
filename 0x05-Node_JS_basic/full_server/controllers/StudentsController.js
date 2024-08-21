// full_server/controllers/StudentsController.js

const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.query.filePath);
      res.status(200).send(
        [
          'This is the list of our students',
          ...Object.keys(students).sort().map(
            field => `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`
          )
        ].join('\n')
      );
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(req.query.filePath);
      const studentsByMajor = students[major] || [];
      res.status(200).send(`List: ${studentsByMajor.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
