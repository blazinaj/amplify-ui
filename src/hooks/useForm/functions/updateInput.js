/**
 * Updates the form input
 * @param {FormInput} newInput - the field values to merge
 * @param {function} setInput - form input state setter function
 */
export const updateInput = (newInput, setInput) => {

  setInput(input => {
    const tempInput = {...input};
    for (const field in newInput) {
      if (newInput.hasOwnProperty(field)) {
        tempInput[field] = newInput[field];
      }
    }
    return tempInput;
  })

};