import {DataStore} from "@aws-amplify/datastore";
import {useEffect} from "react";

export const useDataStoreSubscription = (model, handleQuery) => {
  useEffect(() => {
    const subscription = DataStore.observe(model).subscribe(handleQuery);

    handleQuery()

    return () => subscription.unsubscribe();
  }, [])
}