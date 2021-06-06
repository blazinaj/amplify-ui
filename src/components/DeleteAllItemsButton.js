import Button from "@material-ui/core/Button";
import React from "react";
import {deleteAllItems} from "../functions/deleteAllItems";

/**
 * Button that deletes all items for a model. Use with care.
 * @param model
 * @returns {JSX.Element}
 * @constructor
 */
export const DeleteAllItemsButton = ({model}) => {
  return (
    <Button color="danger" onClick={() => deleteAllItems(model)}>
      Delete All
    </Button>
  )
}