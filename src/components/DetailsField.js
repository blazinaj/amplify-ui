import TextField from "@material-ui/core/TextField";
import React from "react";

/**
 * A field component for details tables that allows the user to view and edit a value
 */
export const DetailsField = ({handleChange, item, field}) => {
  return (
    <TextField
      id={"standard-field-helper-text" + field}
      label={field}
      defaultValue={item[field]}
      onChange={e => handleChange(field, e.target.value)}
      // helperText="Name"
    />
  )
}