// Create a more complex HTTP server using Express

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    const database = process.argv[2];
    if (!database) {
        return res.status(500).send('Database argument not provided');
    }
    try {
        const { totalStudents, studentsByField } = await countStudents(database);
        let responseText = `This is the list of our students\nNumber of students: ${totalStudents}`;
        for (const [field, students] of Object.entries(studentsByField)) {
            responseText += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
        }
        res.send(responseText);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;
