import {useEffect, useState} from "react";
import {isInvalidField} from "../functions/isInvalidField";

/**
 * Holds and handles state for the form submit button based on current input
 */
export const useSubmitDisabled = (input, fieldConfig) => {
  const [submitDisabled, setSubmitDisabled] = useState(false)

  /**
   * Sets the submitDisabled state based on current form input
   */
  useEffect(() => {
    let disabled = false;
    Object.entries(fieldConfig).forEach(([fieldName, properties]) => {
      if (isInvalidField(fieldName, fieldConfig, input)) {
        disabled = true;
      }
    });
    setSubmitDisabled(disabled)
  }, [input]);

  return [
    submitDisabled,
    setSubmitDisabled
  ]
}