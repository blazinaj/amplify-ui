import React, {useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import {DashboardContext} from "../context/DashboardContext";
import {isNullOrUndefined} from "../../../functions/isNullOrUndefined";

/**
 * Displays an arrangement of components using a material-ui grid.
 * @param {ReactChildren} children - one or multiple React components that will be automatically arranged in a Grid
 * @param {object} [dashboardContext] - for setting initial Dashboard Context values that can be retrieved by the children
 */
export const useDashboard = ({children, dashboardContext: dashboardContextParam = {}}) => {

  const classes = useStyles();

  const [dashboardContext, setDashboardContext] = useState({});

  useEffect(() => {
    if (!isNullOrUndefined(dashboardContextParam)) {
      setDashboardContext(dashboardContextParam)
    }
  }, [dashboardContextParam]);

  const display =
      <div className={classes.root}>
        <DashboardContext.Provider value={{dashboardContext, setDashboardContext}}>
          <Grid
            style={{display: "inline-block"}}
            alignItems={"stretch"}
            container
            direction="column"
            justify="space-between"
            spacing={3}
          >
            {
              React.Children.map(children, child => (
                <Grid item>
                  {React.cloneElement(child)}
                </Grid>
              ))
            }
          </Grid>
        </DashboardContext.Provider>
      </div>

  return {
    display
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block"
  },
  gridContainer: {
    flexDirection: "column",
    display: "inline-block"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const Dashboard = (props) => useDashboard(props).display;

export default Dashboard;