import {useState} from "react";
import {useInitialState} from "./useInitialState";

/**
 * Current input state for this form
 */
export const useFormInput = (fieldConfig, item) => {
  const [input, setInput] = useState({});

  /**
   * Sets the initial state of the form and provides a function to reset the form
   */
  const {getInitialState: setInitialState} = useInitialState(fieldConfig, item, setInput)

  return [input, setInput, setInitialState]
}
