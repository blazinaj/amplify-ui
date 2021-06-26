import React, { useContext } from 'react'

const DataStoreContext = React.createContext({})

export const useDatastoreContext = () => {
  const datastoreContext = useContext(DataStoreContext)

  return datastoreContext
}

export default DataStoreContext
