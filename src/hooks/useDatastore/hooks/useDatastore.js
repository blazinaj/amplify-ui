import {useState} from "react";
import {getItems} from "../functions/getItems";
import {useDataStoreSubscription} from "./useDataStoreSubscription";

/**
 * Uses Amplify CLI Datastore for a single database model type
 *
 * @param {class} model
 * @param {boolean} [enableSubscription=false]
 * @param {function} [onAfterQuery] - callback function that is performed after a query completes
 * @param {object[]} [items=[]] - initial items if pre-filling the grid
 * @returns {{items: *[]}}
 */
export const useDatastore = (
  {
    model,
    enableSubscription = false,
    onAfterQuery,
    items: itemsInit = [],
    DataStore
  }) => {

  /**
   * The current items state for this model pulled from DataStore
   */
  const [items, setItems] = useState(itemsInit);

  /**
   * Queries the items from DataStore and stores into state
   */
  const handleQuery = () => {
    getItems(model, DataStore).then(async items => {
      setItems(items);
      onAfterQuery && onAfterQuery(items)
    })
  }

  /**
   * Handles subscription for datastore
   */
  useDataStoreSubscription(model, handleQuery);

  return {
    items,
    ...DataStore
  }

}