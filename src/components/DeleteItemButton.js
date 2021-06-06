import IconButton from "@material-ui/core/IconButton";
import {Delete} from "@material-ui/icons";
import React, {useEffect, useState} from "react";
import {deleteItem} from "../functions/deleteItem";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

/**
 * A button that allows the user to delete an item from the database
 *
 * @param item
 * @param model
 * @param onBeforeDelete
 * @param onAfterDelete
 * @returns {JSX.Element}
 * @constructor
 */
export const DeleteItemButton = ({item, model, onBeforeDelete, onAfterDelete}) => {

  const [dialogOpen, setDialogOpen] = useState(false)

  const handleDelete = async () => {
    onBeforeDelete && await onBeforeDelete(item);
    await deleteItem(model, item);
    onAfterDelete && await onAfterDelete(item)
  }

  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle id="form-dialog-title">
          Deleting an Item
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            ...
          </DialogContentText>
        </DialogContent>
        {/*<DialogActions>*/}
        {/*  <Button onClick={cancel} color="primary">*/}
        {/*    Cancel*/}
        {/*  </Button>*/}
        {/*  <Button onClick={submit} color="primary">*/}
        {/*    Submit*/}
        {/*  </Button>*/}
        {/*</DialogActions>*/}
      </Dialog>
      <IconButton aria-label="delete" onClick={async () => await handleDelete()}>
        <Delete />
      </IconButton>
    </>
  )
}