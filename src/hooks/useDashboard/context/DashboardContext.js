import React, {useContext} from "react";

const DashboardContext = React.createContext({});

const useDashboardContext = () => {
  return useContext(DashboardContext)
}

export {
  DashboardContext,
  useDashboardContext
}