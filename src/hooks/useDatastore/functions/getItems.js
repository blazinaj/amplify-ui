import {DataStore} from "@aws-amplify/datastore";

/**
 * Gets items from DataStore for a single Model
 *
 * @param {SchemaModel} model
 * @returns {Promise<PersistentModel[]>}
 */
export const getItems = (model, dataStore) => {
  return dataStore.query(model);
}