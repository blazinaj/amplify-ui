import {DataStore, Predicates} from "@aws-amplify/datastore";

/**
 * Deletes all items for a Model from the DataStore.
 * USE WITH CAUTION
 * @param model
 * @returns {Promise<*>}
 */
export const deleteAllItems = async (model) => {
  return await DataStore.delete(model, Predicates.ALL)
}