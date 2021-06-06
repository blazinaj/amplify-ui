import React from "react";
import ResetButton from "../components/ResetButton";
import SubmitButton from "../components/SubmitButton";
import {removeFields} from "../functions/removeFields";
import {updateFieldConfig} from "../functions/updateFieldConfig";
import {useDatastore} from "../../useDatastore";
import {submitForm} from "../functions/submitForm";
import {useSubmitDisabled} from "./useSubmitDisabled";
import {updateInput} from "../functions/updateInput";
import {FormHeader} from "../components/FormHeader";
import {FormFields} from "../components/FormFields";
import {useFormFields} from "./useFormFields";
import {useFormInput} from "./useFormInput";

/**
 * Dynamically create a form.
 *
 * @param typename - the graphQL schema model name of the item being created or modified
 * @param fieldConfig
 * @param callback
 * @param resetFunction
 * @param {function} resetCallback - called when the reset button is pressed
 * @param toggleModal
 * @param header
 * @param {function} updateInputFunction - called on submit, allows to preprocess the input before writing it to db
 * @param submitFunction
 * @param disableCancelOnSubmit
 * @param disableSubmitButton
 * @param disableResetButton
 * @param item
 * @returns {{display: *, input: {}}}
 */
export const useForm = (
  {
    model,
    fieldConfig,
    callback,
    getNewItem,
    resetFunction,
    resetCallback,
    toggleModal,
    header,
    updateInputFunction,
    submitFunction,
    disableCancelOnSubmit,
    disableSubmitButton = false,
    disableResetButton = false,
    disableResetFunction = false,
    fields: fieldsInit, // if an array of fields is passed in, it will only use those fields. if no array, it shows all available fields
    item //if an item is passed in this is now an update form
  }) => {

  /**
   * AWS Amplify DataStore for saving form data
   * @type {{items: *[]}}
   */
  const dataStore = useDatastore({model})

  /**
   * Current input state for this form
   */
  const [input, setInput, setInitialState] = useFormInput(fieldConfig, item)

  /**
   * The field configuration for this form
   */
  const [fields, setFields] = useFormFields(fieldsInit);

  /**
   * Determines if the Submit button is disabled or not
   */
  const [submitDisabled, setSubmitDisabled] = useSubmitDisabled(input, fieldConfig);

  /**
   * Calls the submit function to handle form submission
   * @returns {Promise<void>}
   */
  const onSubmit = () => {
    return submitForm({
      input,
      updateInputFunction,
      dataStore,
      callback: afterSubmit,
      setSubmitDisabled,
      bypassFunction: submitFunction,
      item
    })
  }

  /**
   * Invoke this function after you create a new item
   * @param data
   */
  const afterSubmit = (data) => {
    callback && callback(data);
    data && getNewItem && getNewItem(data);
    !disableResetFunction && !getNewItem && resetFunction && resetFunction();
    !disableCancelOnSubmit && cancel();
  }

  /**
   * Resets the form state and triggers the resetCallback function
   */
  const reset = () => {
    resetCallback && resetCallback();
    setInitialState();
  };

  /**
   * Resets the form state and calls the optional toggleModal function
   */
  const cancel = () => {
    setInitialState();
    toggleModal && toggleModal();
  };

  /**
   * The UI for the form
   * @type {JSX.Element}
   */
  const display =
    <div>
      <FormHeader header={header}/>
      <FormFields fieldConfig={fieldConfig}/>
      {
        !disableResetButton &&
          <ResetButton reset={reset}/>
      }
      {
        !disableSubmitButton &&
        <SubmitButton submit={onSubmit} submitDisabled={submitDisabled}/>
      }
    </div>;

  return {
    display,
    input,
    setInput,
    updateInput: (newInput) => updateInput(newInput, setInput),
    removeFields: (fields) => removeFields(fields, setInput),
    setInitialState,
    getInitialState: setInitialState, // For legacy purposes
    updateFieldConfig: (newFieldConfig) => updateFieldConfig(newFieldConfig, input, setInput),
    fieldConfig,
    fields,
    setFields
  }
}
