// File: 2-get_students_by_loc.js
/**
 * Function to filter students by location
 * @param {Array} students - List of student objects
 * @param {string} city - The city to filter students by
 * @returns {Array} - Array of students located in the specified city
 */
function getStudentsByLocation(students, city) {
    return students.filter(student => student.location === city);
}
module.exports = getStudentsByLocation;
