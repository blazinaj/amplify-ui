import FormGroup from "@material-ui/core/FormGroup";
import CustomInput from "./CustomInput";
import {isValidField} from "../functions/isValidField";
import {isInvalidField} from "../functions/isInvalidField";
import React from "react";

/**
 * Renders the form fields for the useForm hook
 * @param fieldConfig
 * @returns {JSX.Element}
 * @constructor
 */
export const FormFields = ({fieldConfig}) => {
  return (
    <>
      {
        Object.entries(fieldConfig).map(([fieldName, properties]) => {
          let {
            tooltip,
            label,
            isHidden = false,
            required = false,
            createItemComponent
          } = properties;

          // if there isn't an explicit "fields" param, show all fields.
          if (!isHidden && (!fields || (fields && fields.includes(fieldName)))) {
            return (
              <FormGroup key={"custom_input" + fieldName}>
                {/*<FormLabel*/}
                {/*  label={label}*/}
                {/*  required={required}*/}
                {/*  tooltip={tooltip}*/}
                {/*  targetId={fieldName}*/}
                {/*  fieldName={fieldName}*/}
                {/*  createItemComponent={createItemComponent}*/}
                {/*/>*/}
                <CustomInput
                  {...properties}
                  input={input}
                  setInput={setInput}
                  fieldName={fieldName}
                  isValid={isValidField(fieldName, fieldConfig, input)}
                  isInvalid={isInvalidField(fieldName, fieldConfig, input)}
                />
              </FormGroup>
            )
          }
        })
      }
    </>
  )
}
