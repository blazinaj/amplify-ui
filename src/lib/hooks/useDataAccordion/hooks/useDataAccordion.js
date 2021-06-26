import {useDatastore} from "../../useDatastore";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DataAccordionItem from "../components/DataAccordionItem";
import React from "react";
import {makeStyles} from "@material-ui/core";

/**
 * An accordion that utilizes a model query and subscription
 * @param model
 * @param title
 * @param icon
 * @param createItemButton
 * @param detailsComponent
 * @param onAfterQuery
 * @returns {JSX.Element}
 * @constructor
 */
export const useDataAccordion = (
  {
    model,
    title,
    icon,
    description,
    createItemButton,
    detailsComponent,
    onAfterQuery
  }) => {

  const classes = useStyles();

  const {items} = useDatastore({model, enableSubscription: true, onAfterQuery})

  const display = (
    <div>
      <div className={classes.root}>
        <Grid container justify="space-between">
          <Grid item>
            <h2>
              <span style={{marginRight: "1em"}}>
                {icon}
              </span>
              {title}
            </h2>
            {
              description &&
              <Typography>
                {description}
              </Typography>
            }
          </Grid>
          <Grid item>
            {createItemButton}
          </Grid>
        </Grid>
        {
          items.map((item, index) =>
            <DataAccordionItem
              key={'accordion_item_' + index + '_' + item.id}
              item={item}
              classes={classes}
              detailsComponent={detailsComponent}
            />
          )
        }
      </div>
    </div>
  )

  return {
    display
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  avatar: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '5%',
    flexShrink: 0,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '20%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  title: {

  }
}));