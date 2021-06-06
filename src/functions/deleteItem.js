import {DataStore} from "@aws-amplify/datastore";

/**
 * Deletes an item from the DataStore
 * @param model
 * @param item
 * @returns {Promise<PersistentModel>}
 */
export const deleteItem = async (model, item) => {
  const todelete = await DataStore.query(model, item.id);
  return await DataStore.delete(todelete);
}

