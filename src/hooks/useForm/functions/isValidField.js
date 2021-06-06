/**
 * Determines if a form field is valid based on fieldConfig and input
 * @param {string} fieldName - the name of the field being checked
 * @param {FormFieldConfig} fieldConfig - the field config object for the form
 * @param {FormInput} input - the current form input
 * @returns {boolean}
 */
export const isValidField = (fieldName, fieldConfig, input) => {
  if (fieldConfig[fieldName].validationFunction) {
    return fieldConfig[fieldName].validationFunction(input[fieldName])
  } else {
    return fieldConfig[fieldName].required && input[fieldName] !== "" && input[fieldName] !== null && input[fieldName] !== undefined
  }
};