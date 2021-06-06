/**
 * Removes fields and field data from input
 * @param {string[]} fields - an array of field names to remove from the input
 * @param {function} setInput - state setter for the current form input to update
 * @param setInput
 */
export const removeFields = (fields, setInput) => {

  setInput(input => {
    const newInput = {...input};
    for (const field of fields) {
      if (newInput.hasOwnProperty(field)) {
        delete newInput[field];
      }
    }

    return newInput;
  })

}