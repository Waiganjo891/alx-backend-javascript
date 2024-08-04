/**
 * Returns a string of all the set values that start with a specific string
 * @param {Set} set - The set of strings to process
 * @param {string} startString - The prefix to look for
 * @returns {string} - A hyphen-separated string of values with the prefix removed
 */
function cleanSet(set, startString) {
  // Create an array from the set and filter it based on the startString
  const filteredValues = Array.from(set)
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length));
  
  // Join the filtered and processed values with hyphens
  return filteredValues.join('-');
}

export default cleanSet;
