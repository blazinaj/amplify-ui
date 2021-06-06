import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import {saveItem} from "../functions/saveItem";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

/**
 * A button that opens a dialog with a form for creating a database item
 *
 * @param itemParam
 * @param text
 * @param description
 * @param detailsComponent
 * @param title
 * @param model
 * @param onBeforeSubmit
 * @param onAfterSubmit
 * @returns {JSX.Element}
 * @constructor
 */
export const CreateItemButton = (
  {
    item: itemParam = {},
    text = "Create Item",
    description,
    detailsComponent,
    title = "Create an Item",
    model,
    onBeforeSubmit,
    onAfterSubmit
  }) => {

  const [open, setOpen] = useState(false)

  const submit = () => {

    onBeforeSubmit && onBeforeSubmit(item);

    saveItem(model, item).then((newItem) => {
      setOpen(false);
      setItem(itemParam || {});

      onAfterSubmit && onAfterSubmit(item)
    })
    .catch(e => {
      console.error("Could not create persona because lexBot could not be created. ", e)
    })
  }

  const cancel = () => {
    setOpen(false)
  }

  const [item, setItem] = useState(itemParam || {});

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        {text}
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle id="form-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          {
            description &&
            <DialogContentText>
              {description}
            </DialogContentText>
          }
          {
            detailsComponent && React.cloneElement(detailsComponent,{item, setItem})
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={cancel} color="primary">
            Cancel
          </Button>
          <Button onClick={submit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}