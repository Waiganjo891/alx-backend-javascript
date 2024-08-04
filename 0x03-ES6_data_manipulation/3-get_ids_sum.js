// Function to get a list of students
function getListStudents() {
    return [
        { id: 1, name: 'John Doe', location: 'New York' },
        { id: 2, name: 'Jane Doe', location: 'San Francisco' },
        { id: 3, name: 'Jim Doe', location: 'Los Angeles' }
    ];
}

// Function to get the sum of all student ids
function getStudentIdsSum(students) {
    return students.reduce((sum, student) => sum + student.id, 0);
}

module.exports = { getListStudents, getStudentIdsSum };
