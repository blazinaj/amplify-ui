import {DataStore} from "@aws-amplify/datastore";
import {useEffect, useState} from "react";
import Amplify from "@aws-amplify/core";

export const amplifyConnector = (dataStoreRef) => {
  DataStore.save = dataStoreRef.save;
  DataStore.query = dataStoreRef.query;
}

export const connectAmplify = (awsconfig) => {
  Amplify.configure(awsconfig);
}

/**
 * Run this once at the beginning
 * @param awsconfig
 */
export const useAmplifyConnector = (dataStoreRef) => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {

  }, [])

  return {
    isConnected
  }
}