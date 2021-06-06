/**
 * Handles submission operation for the useForm hook
 * @param input
 * @param model
 * @param dataStore
 * @param updateInputFunction
 * @param bypassFunction
 * @param callback
 * @param setSubmitDisabled
 * @param organizationID
 * @param item
 * @returns {Promise<void>}
 */
export const submitForm = async (
  {
    input,
    model,
    dataStore,
    updateInputFunction,
    bypassFunction,
    callback,
    setSubmitDisabled,
    organizationID,
    item,
    saveItem
  }) => {
  setSubmitDisabled(true);

  let mutationInput = input;

  if (updateInputFunction) {
    mutationInput = updateInputFunction(input)
  }

  const finalInput = {...mutationInput};

  if (!item || !item.id) {
    finalInput.ownerGroup = organizationID
  }

  /**
   * If there is a mutation, an item, and no submit function,
   * this is now an 'edit' form.
   */
  if (saveItem && !bypassFunction && item) {
    saveItem({...finalInput}).then((data) => {
      callback(data);
    });
  }
  /**
   * If there is a mutation and no submit function, use the mutation to create a new item
   */
  else if (saveItem && !bypassFunction) {

    saveItem({...finalInput}).then((data) => {
      callback(data);
    });
  }

  /**
   * If there is a submit function, use this instead of the mutation hook
   */
  bypassFunction && bypassFunction(mutationInput).then((data) => {
    callback(data);
  });
};