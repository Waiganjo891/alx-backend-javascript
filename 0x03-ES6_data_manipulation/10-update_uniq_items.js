// File: 10-update_uniq_items.js

/**
 * Updates the quantities of items in a map.
 * For each entry with a quantity of 1,
 * updates the quantity to 100.
 * @param {Map} map - The map of items and their quantities.
 * @throws Will throw an error if the argument is not a map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (let [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}
