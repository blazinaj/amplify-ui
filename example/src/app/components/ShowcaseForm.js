import {useForm} from "../../lib/hooks/useForm";
import ShowcaseItem from "./ShowcaseItem";
import ShowcaseDataTable from "./ShowcaseDataTable";
import Grid from "@material-ui/core/Grid";
import React from "react";

const ShowcaseForm = (props) => {

  const exampleFieldConfig = {
    firstName: {
      label: "First Name"
    },
    lastName: {
      label: "Last Name"
    }
  }

  const form = useForm({
    fieldConfig: exampleFieldConfig
  })

  return (
    <ShowcaseItem title={"Form"}>
      {form.display}
    </ShowcaseItem>
  )
}

export default ShowcaseForm;