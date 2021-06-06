// import { DataStore } from '@aws-amplify/datastore';

/**
 * Saves an item into the DataStore
 * @param model
 * @param item
 * @returns {Promise<*>}
 */
export const saveItem = async (model, item, dataStore) => {

  console.log("Saving item to datastore..", {item})

  return await dataStore.save(
    new model(item)
  );
}