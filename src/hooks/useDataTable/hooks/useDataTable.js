import React from "react";
import {useDatastore} from "../../useDatastore";
import {DataGrid} from "@material-ui/data-grid";

/**
 * Display an array of data objects from Amplify Datastore in a table format
 *
 * @param {SchemaModel} model - the Amplify schema model
 * @param {GridColumns[]} fields - the column configuration
 * @returns {{display: JSX.Element}}
 */
export const useDataTable = ({model, columns, items: itemsInit, DataStore}) => {

  const {items, setItems} = useDatastore({model, enableSubscription: true, items: itemsInit, DataStore});

  const display =
    <>
      <DataGrid
        rows={items}
        columns={columns}
      />
    </>

  return {
    display,
    items,
    setItems
  }
}

export const DataTable = (props) => useDataTable(props).display;