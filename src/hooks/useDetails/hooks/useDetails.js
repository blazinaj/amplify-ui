import Grid from "@material-ui/core/Grid";
import React from "react";
import {DetailsField} from "../../..";;

/**
 * Displays the details of a single database item
 * @param {object} model - the DataStore model for this item
 * @param {object} [item] - if an item is passed in with an id, this is a details component
 * @param {string} [item.id] - if an item is passed in with an id, this is a details component
 */
export const useDetails = ({item, model, fields, setItem}) => {
  const handleChange = (field, change) => {
    // setItem && setItem({
    //   ...item,
    //   [field]: change
    // })
  }

  const display = (
    <Grid container spacing={4} justify="space-between" alignItems="flex-start">
      <Grid item>
        {
          fields.map(field =>
            <div style={{marginBottom: "1em"}} key={'field' + field.name}>
              <DetailsField item={item} field={field.name} handleChange={handleChange} />
            </div>
          )
        }
      </Grid>
      {
        item?.id &&
        <Grid item>
          Delete Button
          {/*<DeleteAvatar item={item}/>*/}
        </Grid>
      }
    </Grid>
  )

  return {
    display
  }
}