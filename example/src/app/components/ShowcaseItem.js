import React, {useState} from "react";
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";

/**
 * Displays a React component with a panel for configuring props
 * @param {ShowcasePropsConfig} propsConfig - configuration for props that can be configured for this showcase
 * @example
 *   const propsConfigExample = {
      someCoolProp: {
        required: false,
        type: 'boolean',
        defaultValue: true,
        currentVale: true
      }
    }
 * @returns {JSX.Element}
 * @constructor
 */
const ShowcaseItem = ({title, children, propsConfig}) => {

  const [propsState, setPropsState] = useState(propsConfig || {});

  return (
    <>
      {
        title &&
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
      }
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Paper elevation={2} style={{padding: "1em"}}>
            {children}
          </Paper>
        </Grid>
        {
          propsConfig &&
          <Grid item xs={3}>
            {
              propsState &&
              <Paper elevation={2}>
                {
                  Object.entries(propsState).map(([key, value]) =>
                    <div>
                      {JSON.stringify({key, value})}
                    </div>
                  )
                }
              </Paper>
            }
          </Grid>
        }
      </Grid>
    </>
  )

}

export default ShowcaseItem;