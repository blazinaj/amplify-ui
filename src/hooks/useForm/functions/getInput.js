/**
 * Configures the initial input state for the form
 * @param {FormFieldConfig} fieldConfig - field configuration object for the form
 * @param {object} item - existing item passed in for setting initial state
 * @returns {FormInput}
 */
export const getInput = (fieldConfig, item) => {
  const input = {};
  const itemToUpdate = item || {};
  Object.entries(fieldConfig).forEach(([fieldName, properties]) => {
    if (!properties.removeFromInput) {
      /**
       * If there is an 'item' prop passed in, try and use it's field first.
       * Then try the 'defaultValue' property.
       * Defaults to an empty string
       */
      if (itemToUpdate[fieldName] !== null && itemToUpdate[fieldName] !== undefined) {
        input[fieldName] = itemToUpdate[fieldName];
      } else if (properties.defaultValue !== null && properties.defaultValue !== undefined) {
        input[fieldName] = properties.defaultValue;
      } else {
        input[fieldName] = "";
      }
    }
  });

  /**
   * If there is an 'item' prop passed in, and has an id field, set that for the input.
   * This ensures it will be an update function instead of a create function
   */
  if (item && item.id) {
    input["id"] = item.id
  }

  return input;
}