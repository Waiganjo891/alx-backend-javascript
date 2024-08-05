// File: 8-clean_set.js

/**
 * Function that returns a string of all the set values that
 * start with a specific string (startString).
 * @param {Set} set - A set of strings.
 * @param {string} startString - The starting string to match.
 * @returns {string} - A string containing the modified values
 * separated by hyphens.
 */
function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) return '';

  const result = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}

export default cleanSet;
