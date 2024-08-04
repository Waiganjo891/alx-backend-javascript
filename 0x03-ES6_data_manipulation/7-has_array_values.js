// File: 7-has_array_values.js

/**
 * Function to check if all elements of an array are in a set
 * @param {Set} set - The set to check against
 * @param {Array} array - The array of values to check
 * @returns {boolean} - True if all elements of array are in
 * set, otherwise false
 */
function hasValuesFromArray(set, array) {
    return array.every(element => set.has(element));
}

export default hasValuesFromArray;
